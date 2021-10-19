class Exame {
	constructior(nome) {
		this.nome = nome;
	}

	get nome() {return this.nome}
	set nome(val) {this.nome = val}
}

module.exports = Exame
