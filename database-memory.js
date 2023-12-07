import { randomUUID } from "crypto"

export class DatabaseMemory{
#livros = new Map()

list(){
    return Array.from(this.#livros.entries())
}
create(livro){
    const livroId = randomUUID()
    this.#livros.set(livroId, livro)
}
update(id, livro){
    this.#livros.set(id, livro)
}
delete(id, livro){
    this.#livros.delete(id, livro)
}
}
