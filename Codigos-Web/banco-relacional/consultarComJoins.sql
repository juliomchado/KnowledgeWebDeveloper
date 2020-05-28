-- Seleciona todas as cidades onde o id da cidade seja igual o prefeito cidade_id
SELECT
    *
FROM
    cidades c
    INNER JOIN prefeitos p ON c.id = p.cidade_id;

-- Vai trazer a interceção dos 2 (cidades + os prefeitos) e todas as cidades, pois cidade ta do lado esquerdo
select
    *
from
    cidades c
    left join prefeitos p on c.id = p.cidade_id;

-- Vai trazer a interceção dos 2 (cidades + os prefeitos) e todos os prefeitos, pois prefeito ta do lado direito
select
    *
from
    cidades c
    right join prefeitos p on c.id = p.cidade_id;

-- Vai trazer todos os dados da tabela cidade e tabela prefeitos
select
    *
from
    cidades c full
    join prefeitos p on c.id = p.cidade_id;

-- Estratégia para fazer o full join no MySQL
select
    *
from
    cidades c
    left join prefeitos p on c.id = p.cidade_id
union
select
    *
from
    cidades c
    right join prefeitos p on c.id = p.cidade_id;