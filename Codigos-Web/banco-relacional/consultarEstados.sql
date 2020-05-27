-- where = filtra os dados
-- order by = ordena de forma crescente (menor pro maior) e colocando o desc é decrescente


select
    *
from
    estados
select
    sigla,
    nome as 'Nome do Estado'
from
    estados
where
    regiao = 'Sul'
select
    nome,
    regiao,
    populacao
from
    estados
where
    populacao >= 10
order by
    populacao desc