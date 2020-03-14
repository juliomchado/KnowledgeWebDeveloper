const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 5', function () { // Quero executar em 5 em 5 segundos em qualquer minuto, as 12 horas, ignorando o dia do mês, ignorando o próprio mes e executando a terça feira
    console.log('Executando Tarefa 1!', new Date().getSeconds())    // Se eu colocasse apenas assim 5 * 12 * * 2 ele iria executar nos segundos 5 em qualquer minuto
}) 

setTimeout(function () { // setTimeout = função do próprio javascript
    tarefa1.cancel() // Forma de cancelar temporizador feito pelo scheduleJob
    console.log('Cancelando Tarefa 1!')
}, 20000) // Executa depois de 20segundos

const regra = new schedule.RecurrenceRule()  // RecurrenceRule = Regra de recorrência, ou seja, posso colocar os valores para criar as regras
regra.dayOfWeek = [new schedule.Range(1, 5)] // Quero que execute de segunda a terça Obs: Os dias são 0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 5 = Sexta, 6 = Sabado
regra.hour = 22 // Apenas as 22 horas
regra.second = 30 // Sempre no segundo 30 da hora 

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})  // 1 a regra e depois a função a ser executada