import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IBook } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface IShow {
  id: string
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as IBook[]
  private book = {} as IBook

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  @Mutation
  private SET_ALL(books: IBook[]) {
    this.books = books
  }

  @Mutation
  private SET_SINGLE(book: IBook) {
    this.book = book
  }

  @Action
  public async index() {
    const books = await $axios.$get('/volumes?q=programação web')

    this.context.commit('SET_ALL', books.items)
  }

  @Action
  public async show({ id }: IShow) {
    const book = await $axios.$get('/volumes/' + id)

    this.context.commit('SET_SINGLE', book)
  }
}
