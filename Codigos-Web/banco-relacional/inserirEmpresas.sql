ALTER TABLE
    empresas
MODIFY
    cnpj VARCHAR(20);

INSERT INTO
    empresas(nome, cnpj)
VALUES
    ('Bradesco', 2113131312312312),
    ('Vale', 12312),
    ('Cielo', 01231312312);

desc empresas;

desc prefeitos;

select
    *
from
    empresas;

select
    *
from
    cidades;

INSERT INTO
    empresas_unidades (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

select
    *
from
    empresas_unidades