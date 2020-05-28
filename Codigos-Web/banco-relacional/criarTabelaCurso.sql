create table professor(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    tecnologia VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO professor (nome, tecnologia) VALUES('João', 'React'),
    ('Seila' , 'Seila')

select * from professor



create table curso (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    professor_curso INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (professor_curso) REFERENCES professor(id)
);


INSERT INTO curso (nome, descricao, professor_curso) VALUES
 ('Curso react', 'Curso sobre fazer coisas em react', 1),
 ('Curso react native', 'Curso sobre fazer coisas em react', 1),
 ('Curso Javascript', 'Curso sobre fazer coisas em react', 2),
 ('Curso VUE', 'Curso sobre fazer coisas em react', 2);

 select * from curso
