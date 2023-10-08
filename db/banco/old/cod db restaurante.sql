CREATE TABLE pagamento(
	id_pagamento SERIAL PRIMARY KEY NOT NULL,
	data_pagamento DATE NOT NULL,
	valor_pagamento NUMERIC NOT NULL
);


CREATE TABLE pedido(
   	id_pedido SERIAL PRIMARY KEY NOT NULL,
	id_produto SERIAL NOT NULL,
	numero_mesa INT NOT NULL
);

CREATE TABLE produto(
	id_produto SERIAL PRIMARY KEY NOT NULL,
	tipo_produto INT NOT NULL,
	nome_produto CHARACTER VARYING(50) NOT NULL,
	quantidade_produto INT NOT NULL
);

CREATE TABLE ingrediente(
	id_ingrediente SERIAL PRIMARY KEY NOT NULL,
	quantidade_ingrediente INT NOT NULL,
	unidade_medida CHARACTER VARYING(2), 
	nome_ingrediente CHARACTER VARYING(50) NOT NULL
);
create table relatorio(
	id_relatorio SERIAL PRIMARY KEY NOT NULL,
	data_relatorio DATE NOT NULL,
	id_pedido INT NOT NULL REFERENCES pedido(id_pedido)
);

CREATE TABLE mesa(
	id_mesa SERIAL PRIMARY KEY NOT NULL,
	numero_mesa INT NOT NULL
);

CREATE TABLE usuario(
	id_usuario SERIAL PRIMARY KEY NOT NULL,
	senha_usuario CHARACTER VARYING(50) NOT NULL,
	nome_usuario CHARACTER VARYING(50) NOT NULL,
	cpf_usuario CHARACTER VARYING(14) NOT NULL,
	telefone_usuario CHARACTER VARYING(14) NOT NULL,
	email_usuario CHARACTER VARYING(50) NOT NULL
);

ALTER TABLE relatorio
ADD CONSTRAINT fk_relatorio_pedido
FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido);

ALTER TABLE pedido
ADD CONSTRAINT fk_pedido_produto
FOREIGN KEY (id_produto) REFERENCES produto (id_produto);

INSERT INTO ingrediente(quantidade_ingrediente,unidade_medida,nome_ingrediente)
	VALUES
	(100, 'un', 'queijo'),
	(100, 'un', 'presunto'),
	(100, 'un', 'massa de pizza'),
	(50, 'pc', 'calabresa'),
	(10, 'kg', 'molho de tomate');

INSERT INTO mesa(numero_mesa)
	VALUES (01),(02),(03),(04),(05);

INSERT INTO pagamento(data_pagamento,valor_pagamento)
	VALUES 
	('20230802',120.50),
	('20230703',223.40),
	('20230620',155.58),
	('20230513',751.37),
	('20230425',154.74);

INSERT INTO produto(tipo_produto,nome_produto,quantidade_produto)
	VALUES
	(1,'lata coca-cola 350ml',30),
	(4,'calabresa',0),
	(2,'portuguesa',0),
	(5,'sensacao',0),
	(1,'chop pilsen 600ml',0);


INSERT INTO usuario(senha_usuario,nome_usuario,cpf_usuario,telefone_usuario,email_usuario)
	VALUES
	(MD5('gilson123456'),'Gilson Cesar Carlos Filho ','000.111.222-33','111111111111','gilson@gmail.com'),
	(MD5('marcos123456'),'Marcos Alberto Levandoski','111.222.333-44','222222222222','marcos@gmail.com'),
	(MD5('gustavo123456'),'Gustavo Baufleur Pereira','222.333.444-55','333333333333','gustavo@gmail.com'),
	(MD5('vinicius123456'),'Vinicius Ushizima Otharan Nunes','333.444.555-66','444444444444','vinicius@gmail.com');
	
	INSERT INTO pedido(id_produto, numero_mesa) 
	VALUES 
		(1 , 2), 
		(2, 3), 
		(3, 4), 
		(5, 6);
		
	INSERT INTO relatorio(data_relatorio, id_pedido) 
	VALUES('2023-06-20', 1),
		('2023-05-30', 3),
		('2023-04-14', 2),
		('2023-02-10', 4);

SELECT * FROM pedido;
	
SELECT * FROM produto;

SELECT * FROM relatorio;

SELECT * FROM ingrediente;

SELECT * FROM pagamento;

SELECT * FROM mesa;

SELECT * FROM usuario;
