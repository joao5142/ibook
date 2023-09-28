<template>
  <div class="read-book">
    <h1>{{ book?.volumeInfo?.title }}</h1>

    <div class="read-book-grid">
      <div ref="thumbnail" class="keen-slider thumbnail">
        <div
          v-for="item in totalPage"
          :key="'slide-thumb' + item"
          :class="`keen-slider__slide number-slide${item}`"
        >
          <BookPage :page="item" />
        </div>
      </div>
      <div ref="slider" class="keen-slider slide-container">
        <div
          v-for="item in totalPage"
          :key="'slide' + item"
          :class="`keen-slider__slide number-slide${item}`"
        >
          <BookPageContainer>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            obcaecati quo soluta corporis, tenetur accusantium id officia,
            eligendi illum saepe quam. Pariatur deserunt iure nam! Quia amet
            modi voluptatum minima? Laborum vero pariatur non aliquam, quos
            commodi necessitatibus nemo laudantium facere, suscipit aut vitae
            perspiciatis dolores et, harum alias eius omnis voluptate blanditiis
            incidunt soluta deserunt autem. Iste, quae harum. Mollitia corrupti
            cum deserunt magnam porro recusandae velit? Rem aliquid accusamus
            neque, maxime ad eaque officia dicta fugiat impedit nobis natus
            eligendi. Nulla perspiciatis at eaque. Molestias atque enim quo?
            Temporibus asperiores aliquid, culpa quisquam facere eligendi autem
            dolorem voluptatibus quod maiores. Dolorum illo dignissimos autem
            commodi, eius consequatur, nisi veniam culpa similique earum eos ut
            quia nobis laboriosam iure. Eaque nulla accusantium culpa provident
            magnam quasi reprehenderit, non neque ipsum dolorum odit voluptatum
            architecto? Ipsa id, officiis reprehenderit recusandae delectus
            molestiae. Sit nobis magnam ex maiores aperiam similique repellat?
            Quasi laudantium voluptates doloremque eum, libero magnam dolore
            quis ipsam inventore earum similique? Natus molestiae minima ipsum
            dolorum pariatur dolore, incidunt laborum consequatur aliquid fugiat
            maiores quis delectus. Perferendis, nulla? Magnam voluptatibus error
            debitis aliquid quisquam consectetur vel praesentium modi unde
            nostrum vero provident architecto, corporis, reprehenderit sequi
            illum eligendi voluptate tempora quod! Eveniet ipsam possimus
            debitis ducimus reiciendis consequuntur? Tempore reiciendis dolor
            sint optio et, sapiente vel, possimus provident cum officiis
            suscipit. Animi dicta, doloribus dolorum eveniet vero temporibus
            officia, maxime dignissimos, debitis magnam maiores. Praesentium id
            ab animi. A numquam qui vel. Distinctio quod veniam corporis
            incidunt qui iure id ad cupiditate, quasi iusto doloremque sunt,
            perferendis voluptatum, sapiente excepturi ipsam voluptas dolores et
            debitis vel totam quam? Saepe iste, cum culpa laborum delectus fugit
            reiciendis ipsam natus atque quibusdam. Omnis, cupiditate iure
            deleniti laudantium eius similique culpa facere, voluptatum minima
            eum sunt quam ipsa commodi voluptate et! Accusamus quaerat illo
            suscipit reiciendis eaque similique. At nisi numquam harum incidunt
            molestias nam beatae, suscipit quos laborum neque recusandae
            nesciunt commodi architecto, ab molestiae quasi amet. Vero, ducimus
            recusandae. Asperiores vitae ipsa, possimus sunt quae voluptate
            fugiat architecto officia deserunt. Dignissimos ea fuga obcaecati
            eaque et ducimus dolor nostrum eveniet aliquam quis! Modi voluptates
            consequuntur quas. Voluptates, laudantium voluptatem. Officia vero
            corrupti consectetur ea voluptas illum porro iusto ipsa doloremque
            enim deleniti, molestiae ex aut ullam, quidem officiis beatae quia
            repellendus ratione tempore ut fuga eligendi? Sit, in repudiandae?
            Quia eligendi maxime explicabo? Voluptatibus, fuga ipsa voluptatum
            modi nobis ex dolor eligendi, delectus totam blanditiis facere? Ut
            totam culpa repudiandae ea minus rem, doloremque quidem. At autem
            sit maxime. Ducimus quos veritatis voluptas praesentium odio
            obcaecati qui dicta harum ratione nulla architecto debitis explicabo
            deserunt eaque exercitationem libero, magni deleniti reiciendis
            corrupti natus voluptatum quasi totam aliquid. Ullam, repudiandae?
            Eveniet autem molestias officia alias, necessitatibus quae neque
            natus laborum praesentium aut culpa dicta iste dignissimos
          </BookPageContainer>
        </div>
      </div>
      <div class="pagination-container">
        <button class="pagination-button" @click="slider.prev()">
          <img
            class="pagination-arrow-left"
            src="@/assets/img/arrow.svg"
            alt=""
          />
        </button>
        <button class="pagination-button" @click="slider.next()">
          <img
            class="pagination-arrow-right"
            src="@/assets/img/arrow.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

import Vue from 'vue'

import { books } from '@/store'

function ThumbnailPlugin(main: any) {
  return (slider: any) => {
    function removeActive() {
      slider.slides.forEach((slide: any) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx: any) {
      slider.slides[idx].classList.add('active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide: any, idx: any) => {
        slide.addEventListener('click', () => {
          main.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      addActive(slider.track.details.rel)
      addClickEvents()
      main.on('animationStarted', (main: any) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default Vue.extend({
  data() {
    return {
      totalPage: 5,
      slider: '',
      thumbnail: '',
    } as { slider: any; totalPage: number; thumbnail: any }
  },
  computed: {
    book() {
      return books.$single
    },
  },
  mounted() {
    // @ts-ignore

    this.slider = new KeenSlider(this.$refs.slider)
    this.thumbnail = new KeenSlider(
      this.$refs.thumbnail as any,
      {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10,
        },
        vertical: true,
      },
      [ThumbnailPlugin(this.slider)]
    )
  },
})
</script>

<style scoped lang="scss">
.read-book {
  &-grid {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-rows: minmax(500px, 1000px) auto;
    gap: 1rem;

    & > :nth-child(2) {
      text-align: justify;
    }

    @include screen('small') {
      grid-template-columns: 1fr;

      .thumbnail {
        display: none;
      }
    }
  }
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  grid-column: 1/-1;

  .pagination-button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    background: color('dark', 'darkest');

    cursor: pointer;
  }
  .pagination-arrow {
    &-right {
      rotate: 180deg;
    }
  }
}

.keen-slider__slide.active {
  border: 2px solid;
}
</style>
