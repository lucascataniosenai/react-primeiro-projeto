const TemplateExpressions = () => {
  let nome = "Meu Nome"
  let aluno = {
    nome:"Pedro",
    turma:"A",
    ano:"2"
  }
  return(
    <div>
      <h1>Olá {nome}</h1>
      <h2>O aluno {aluno.nome} está no {aluno.ano}° ano, na turma {aluno.turma}</h2>
    </div>
  )
}

export default TemplateExpressions