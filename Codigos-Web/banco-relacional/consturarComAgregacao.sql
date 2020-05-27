-- sum = funcao de soma do SQL
-- group by = agrupar por
-- order by = ordernar por
-- avg = media

select
    regiao as 'Região',
    sum(populacao) as Total
from
    `estados`
group by
    regiao
order by
    Total desc
    
select
    sum(populacao) as Total
from
    `estados`
order by
    Total desc

select
    regiao as 'Região',
    avg(populacao) as Total
from
    `estados`
group by
    regiao
order by
    Total desc