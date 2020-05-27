-- !!!!!!!!!!!! NUNCA DE DELETE SEM WHERE

delete from estados `estados`
where sigla = 'MN'

select * from `estados`

delete from `estados`
where id >= 1000