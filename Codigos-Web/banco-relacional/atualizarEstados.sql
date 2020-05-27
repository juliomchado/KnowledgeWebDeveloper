-- !!!!!! NUNCA DÊ UM UPDATE SEM WHERE
-- update = atualize estados na linha nome onde a sigla é 'MA' 
update
    estados
set
    nome = 'Maranhão'
where
    sigla = 'MA'
update
    estados
set
    nome = 'Paraná',
    populacao = 11.32
where
    sigla = 'PR'
select
    nome,
    sigla,
    populacao
from
    estados
where
    sigla = 'PR'