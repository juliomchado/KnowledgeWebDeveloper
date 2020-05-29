create table professor(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    tecnologia VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO
    professor (nome, tecnologia)
VALUES
    ('João', 'React'),
    ('Seila', 'Seila')
select
    *
from
    professor create table curso (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        descricao VARCHAR(255) NOT NULL,
        professor_curso INT UNSIGNED NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (professor_curso) REFERENCES professor(id)
    );

INSERT INTO
    curso (nome, descricao, professor_curso)
VALUES
    (
        'Curso react',
        'Curso sobre fazer coisas em react',
        1
    ),
    (
        'Curso react native',
        'Curso sobre fazer coisas em react',
        1
    ),
    (
        'Curso Javascript',
        'Curso sobre fazer coisas em react',
        2
    ),
    (
        'Curso VUE',
        'Curso sobre fazer coisas em react',
        2
    );

select
    *
from
    curso
select
    c.nome as Curso,
    c.descricao as Descricao,
    p.nome as Professor,
    p.tecnologia
from
    curso c
    inner join professor p on p.id = c.professor_curso CREATE TABLE IF NOT EXISTS alunos (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        cursos_id INT UNSIGNED NOT NULL,
        professor_id INT UNSIGNED NOT NULL PRIMARY KEY (id, cursos_id, professor_id)
    );

CREATE TABLE IF NOT EXISTS alunos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(255) not null,
    cursos_id INT UNSIGNED NOT NULL,
    professor_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id, cursos_id, professor_id)
);

INSERT INTO
    alunos (nome, cursos_id, professor_id)
VALUES
    ('Joãozão', 1, 2),
    ('Joaaazinhow', 2, 1),
    ('Esse cara msm', 2, 3)
select
    a.nome as Alunos,
    c.nome as Cursos,
    p.nome as Professor
from
    alunos a,
    curso c,
    professor p
where
    c.id = a.cursos_id
    and p.id = a.professor_id group by Cursos
