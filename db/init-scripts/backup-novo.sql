--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-11-12 13:40:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 18469)
-- Name: Ingredientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Ingredientes" (
    id_ingrediente integer NOT NULL,
    quantidade_ingrediente integer,
    unidade_medida character varying(2),
    nome_ingrediente character varying(50),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Ingredientes" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 18472)
-- Name: Ingredientes_id_ingrediente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Ingredientes_id_ingrediente_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Ingredientes_id_ingrediente_seq" OWNER TO postgres;

--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 217
-- Name: Ingredientes_id_ingrediente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Ingredientes_id_ingrediente_seq" OWNED BY public."Ingredientes".id_ingrediente;


--
-- TOC entry 218 (class 1259 OID 18473)
-- Name: ItemPedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ItemPedidos" (
    id_item_pedido integer NOT NULL,
    id_pedido_item_pedido integer NOT NULL,
    quantidade_item_pedido integer NOT NULL,
    id_produto_item_pedido integer NOT NULL,
    valor_item_pedido numeric(8,2),
    total_item_pedido numeric(8,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ItemPedidos" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 18476)
-- Name: ItemPedidos_id_item_pedido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ItemPedidos_id_item_pedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ItemPedidos_id_item_pedido_seq" OWNER TO postgres;

--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 219
-- Name: ItemPedidos_id_item_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ItemPedidos_id_item_pedido_seq" OWNED BY public."ItemPedidos".id_item_pedido;


--
-- TOC entry 220 (class 1259 OID 18477)
-- Name: Mesas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Mesas" (
    id_mesa integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Mesas" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 18480)
-- Name: Mesas_id_mesa_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Mesas_id_mesa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Mesas_id_mesa_seq" OWNER TO postgres;

--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 221
-- Name: Mesas_id_mesa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Mesas_id_mesa_seq" OWNED BY public."Mesas".id_mesa;


--
-- TOC entry 222 (class 1259 OID 18481)
-- Name: Pagamentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pagamentos" (
    id_pagamento integer NOT NULL,
    data_pagamento timestamp with time zone NOT NULL,
    valor_pagamento numeric(8,2) NOT NULL,
    id_usuario_pagamento integer NOT NULL,
    id_pedido_pagamento integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Pagamentos" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 18484)
-- Name: Pagamentos_id_pagamento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pagamentos_id_pagamento_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Pagamentos_id_pagamento_seq" OWNER TO postgres;

--
-- TOC entry 4886 (class 0 OID 0)
-- Dependencies: 223
-- Name: Pagamentos_id_pagamento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pagamentos_id_pagamento_seq" OWNED BY public."Pagamentos".id_pagamento;


--
-- TOC entry 224 (class 1259 OID 18485)
-- Name: Pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pedidos" (
    id_pedido integer NOT NULL,
    id_usuario_pedido integer,
    id_mesa_pedido integer,
    obs_pedido character varying(255),
    status_pedido character varying(255) DEFAULT 'Em andamento'::character varying,
    data_pedido timestamp with time zone,
    total_pedido numeric(8,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Pedidos" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 18491)
-- Name: Pedidos_id_pedido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pedidos_id_pedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Pedidos_id_pedido_seq" OWNER TO postgres;

--
-- TOC entry 4887 (class 0 OID 0)
-- Dependencies: 225
-- Name: Pedidos_id_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pedidos_id_pedido_seq" OWNED BY public."Pedidos".id_pedido;


--
-- TOC entry 226 (class 1259 OID 18492)
-- Name: Produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Produtos" (
    id_produto integer NOT NULL,
    nome_produto character varying(255) NOT NULL,
    descricao_produto character varying(255) NOT NULL,
    preco_produto numeric(8,2) NOT NULL,
    quantidade_produto integer,
    tipo_produto character varying(255),
    produto_transformacao boolean,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    imagem_produto character varying(255)
);


ALTER TABLE public."Produtos" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 18497)
-- Name: Produtos_id_produto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Produtos_id_produto_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Produtos_id_produto_seq" OWNER TO postgres;

--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 227
-- Name: Produtos_id_produto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Produtos_id_produto_seq" OWNED BY public."Produtos".id_produto;


--
-- TOC entry 228 (class 1259 OID 18498)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    senha_usuario character varying(255) NOT NULL,
    nome_usuario character varying(255) NOT NULL,
    cpf_usuario character varying(255),
    telefone_usuario character varying(255),
    email_usuario character varying(255) NOT NULL,
    tipo_usuario character varying(255)
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 18503)
-- Name: Usuarios_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Usuarios_id_usuario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Usuarios_id_usuario_seq" OWNER TO postgres;

--
-- TOC entry 4889 (class 0 OID 0)
-- Dependencies: 229
-- Name: Usuarios_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Usuarios_id_usuario_seq" OWNED BY public.usuarios.id_usuario;


--
-- TOC entry 230 (class 1259 OID 18504)
-- Name: pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedidos (
    id_pedido integer NOT NULL,
    id_usuario_pedido integer,
    id_mesa_pedido integer,
    qtd_produto integer,
    obs_pedido character varying(255),
    status_pedido character varying(255) DEFAULT 'Em andamento'::character varying,
    data_pedido timestamp with time zone,
    total_pedido numeric(8,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    itens_pedido jsonb NOT NULL
);


ALTER TABLE public.pedidos OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 18510)
-- Name: pedidos_id_pedido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedidos_id_pedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedidos_id_pedido_seq OWNER TO postgres;

--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 231
-- Name: pedidos_id_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedidos_id_pedido_seq OWNED BY public.pedidos.id_pedido;


--
-- TOC entry 232 (class 1259 OID 18511)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    senha_usuario character varying(255) NOT NULL,
    nome_usuario character varying(255) NOT NULL,
    cpf_usuario character varying(255) NOT NULL,
    telefone_usuario character varying(255),
    email_usuario character varying(255) NOT NULL,
    tipo_usuario character varying(255)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 18516)
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 233
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- TOC entry 4675 (class 2604 OID 18517)
-- Name: Ingredientes id_ingrediente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredientes" ALTER COLUMN id_ingrediente SET DEFAULT nextval('public."Ingredientes_id_ingrediente_seq"'::regclass);


--
-- TOC entry 4676 (class 2604 OID 18518)
-- Name: ItemPedidos id_item_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos" ALTER COLUMN id_item_pedido SET DEFAULT nextval('public."ItemPedidos_id_item_pedido_seq"'::regclass);


--
-- TOC entry 4677 (class 2604 OID 18519)
-- Name: Mesas id_mesa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mesas" ALTER COLUMN id_mesa SET DEFAULT nextval('public."Mesas_id_mesa_seq"'::regclass);


--
-- TOC entry 4678 (class 2604 OID 18520)
-- Name: Pagamentos id_pagamento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos" ALTER COLUMN id_pagamento SET DEFAULT nextval('public."Pagamentos_id_pagamento_seq"'::regclass);


--
-- TOC entry 4679 (class 2604 OID 18521)
-- Name: Pedidos id_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos" ALTER COLUMN id_pedido SET DEFAULT nextval('public."Pedidos_id_pedido_seq"'::regclass);


--
-- TOC entry 4681 (class 2604 OID 18522)
-- Name: Produtos id_produto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produtos" ALTER COLUMN id_produto SET DEFAULT nextval('public."Produtos_id_produto_seq"'::regclass);


--
-- TOC entry 4683 (class 2604 OID 18523)
-- Name: pedidos id_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedidos_id_pedido_seq'::regclass);


--
-- TOC entry 4685 (class 2604 OID 18524)
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- TOC entry 4682 (class 2604 OID 18525)
-- Name: usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public."Usuarios_id_usuario_seq"'::regclass);


--
-- TOC entry 4859 (class 0 OID 18469)
-- Dependencies: 216
-- Data for Name: Ingredientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Ingredientes" (id_ingrediente, quantidade_ingrediente, unidade_medida, nome_ingrediente, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4861 (class 0 OID 18473)
-- Dependencies: 218
-- Data for Name: ItemPedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ItemPedidos" (id_item_pedido, id_pedido_item_pedido, quantidade_item_pedido, id_produto_item_pedido, valor_item_pedido, total_item_pedido, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4863 (class 0 OID 18477)
-- Dependencies: 220
-- Data for Name: Mesas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Mesas" (id_mesa, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4865 (class 0 OID 18481)
-- Dependencies: 222
-- Data for Name: Pagamentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pagamentos" (id_pagamento, data_pagamento, valor_pagamento, id_usuario_pagamento, id_pedido_pagamento, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4867 (class 0 OID 18485)
-- Dependencies: 224
-- Data for Name: Pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pedidos" (id_pedido, id_usuario_pedido, id_mesa_pedido, obs_pedido, status_pedido, data_pedido, total_pedido, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4869 (class 0 OID 18492)
-- Dependencies: 226
-- Data for Name: Produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Produtos" (id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao, "createdAt", "updatedAt", imagem_produto) FROM stdin;
2	Pizza Calabresa	Molho de tomate, queijo mussarela, parmesão, calabresa e cebola	59.00	\N	Pizza	f	\N	2024-11-09 20:29:56.718-03	uploads\\1731194996713-images.jpg
9	Classic Burguer	Pão macio, hamburguer de 180g, alface, tomate, cebola roxa, queijo mussarela e maionese da casa	23.00	\N	Lanches	f	\N	2024-11-09 21:17:02.345-03	uploads\\eb69bc6323ac18cdc5f95cd7b1bddad6
3	Cheese Burguer 	Pão macio, hamburguer de 180g, queijo prato e maionese da casa.	19.00	\N	Lanches	f	\N	2024-11-09 21:18:45.438-03	uploads\\13605b13c840fa7c5a7668637e221e95
4	Cheese Bacon	Pão crocante, hamburguer de 180g , queijo provolone, bacon em tiras e maionese com temperos verdes. 	28.00	\N	Lanches	f	\N	2024-11-09 21:25:03.369-03	uploads\\6821aa240fbfd974db32a2b1aadc5b91
5	Crispy Chicken	Pão macio, file de frango crocante, cebola roxa, queijo mussarela e maionese da casa.	25.00	\N	Lanches	f	\N	2024-11-09 21:27:21.91-03	uploads\\3afc76d29fd5daf5556e85f1dc815372
6	Cheddar Burguer	Pão crocante, hambúrguer de 200g, queijo cheddar, picles e cebola caramelizada	25.00	\N	Lanches	f	\N	2024-11-09 21:30:08.673-03	uploads\\9f8c79430f756abe2775330c00c1cf9c
7	Pizza Calabresa	Queijo, calabresa ,cebola e oregano.	59.00	\N	Pizza	f	\N	2024-11-09 21:38:54.972-03	uploads\\cfdff82ac307ed9e100ef67c9816fc7c
8	Pizza Calabresa	pizza	45.00	\N	Pizza	f	\N	2024-11-09 22:15:01.905-03	uploads\\236a91d4ace519bd3cb74ae01586dd0e
\.


--
-- TOC entry 4873 (class 0 OID 18504)
-- Dependencies: 230
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedidos (id_pedido, id_usuario_pedido, id_mesa_pedido, qtd_produto, obs_pedido, status_pedido, data_pedido, total_pedido, "createdAt", "updatedAt", itens_pedido) FROM stdin;
5	3	23	\N	Sem cebola e picles	Em andamento	2024-11-11 14:51:52.145-03	25.00	2024-11-11 14:51:52.146-03	2024-11-11 14:51:52.146-03	[{"preco_item_pedido": 13, "quantidade_item_pedido": 2, "nome_produto_item_pedido": "Cheddar burguer"}]
6	3	34	\N	Hamburguer mal passado	Em andamento	2024-11-11 14:57:41.945-03	170.00	2024-11-11 14:57:41.945-03	2024-11-11 14:57:41.945-03	[{"preco_item_pedido": 34, "quantidade_item_pedido": 5, "nome_produto_item_pedido": "Classic Burguer"}]
7	3	2	\N	Hamburguer bem passado	Em andamento	2024-11-11 15:00:43.297-03	69.00	2024-11-11 15:00:43.298-03	2024-11-11 15:00:43.298-03	[{"preco_item_pedido": 34, "quantidade_item_pedido": 3, "nome_produto_item_pedido": "Classic Burguer"}]
2	3	32	\N	Sem queijo mussarela	Em andamento	2024-11-11 14:42:25.01-03	54.00	2024-11-11 14:42:25.01-03	2024-11-11 14:42:25.01-03	[{"preco_item_pedido": 27, "quantidade_item_pedido": 2, "nome_produto_item_pedido": "Cheese Bacon"}]
3	3	45	\N	ao ponto 	Em andamento	2024-11-11 14:43:39.999-03	50.00	2024-11-11 14:43:39.999-03	2024-11-11 14:43:39.999-03	[{"preco_item_pedido": 25, "quantidade_item_pedido": 2, "nome_produto_item_pedido": "Crispy chicken"}]
4	3	12	\N	Sem observaçoes	Em andamento	2024-11-11 14:45:07.657-03	38.00	2024-11-11 14:45:07.657-03	2024-11-11 14:45:07.657-03	[{"preco_item_pedido": 19, "quantidade_item_pedido": 1, "nome_produto_item_pedido": "Cheese Burguer"}, {"preco_item_pedido": 27, "quantidade_item_pedido": 1, "nome_produto_item_pedido": "Cheese Bacon"}]
\.


--
-- TOC entry 4875 (class 0 OID 18511)
-- Dependencies: 232
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id_usuario, senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario, tipo_usuario) FROM stdin;
\.


--
-- TOC entry 4871 (class 0 OID 18498)
-- Dependencies: 228
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id_usuario, senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario, tipo_usuario) FROM stdin;
3	admin123456	Gustavo	123.456.789.12	\N	admin@gmail.com	\N
5	GUSTAVO123	Gustavo Henrique	\N	\N	gustavohenrique.baldin@gmail.com	\N
\.


--
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 217
-- Name: Ingredientes_id_ingrediente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Ingredientes_id_ingrediente_seq"', 1, false);


--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 219
-- Name: ItemPedidos_id_item_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ItemPedidos_id_item_pedido_seq"', 1, false);


--
-- TOC entry 4894 (class 0 OID 0)
-- Dependencies: 221
-- Name: Mesas_id_mesa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Mesas_id_mesa_seq"', 1, false);


--
-- TOC entry 4895 (class 0 OID 0)
-- Dependencies: 223
-- Name: Pagamentos_id_pagamento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pagamentos_id_pagamento_seq"', 1, false);


--
-- TOC entry 4896 (class 0 OID 0)
-- Dependencies: 225
-- Name: Pedidos_id_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pedidos_id_pedido_seq"', 1, false);


--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 227
-- Name: Produtos_id_produto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Produtos_id_produto_seq"', 12, true);


--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 229
-- Name: Usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Usuarios_id_usuario_seq"', 5, true);


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 231
-- Name: pedidos_id_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_id_pedido_seq', 8, true);


--
-- TOC entry 4900 (class 0 OID 0)
-- Dependencies: 233
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 1, false);


--
-- TOC entry 4687 (class 2606 OID 18527)
-- Name: Ingredientes Ingredientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredientes"
    ADD CONSTRAINT "Ingredientes_pkey" PRIMARY KEY (id_ingrediente);


--
-- TOC entry 4690 (class 2606 OID 18529)
-- Name: ItemPedidos ItemPedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_pkey" PRIMARY KEY (id_item_pedido);


--
-- TOC entry 4693 (class 2606 OID 18531)
-- Name: Mesas Mesas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mesas"
    ADD CONSTRAINT "Mesas_pkey" PRIMARY KEY (id_mesa);


--
-- TOC entry 4695 (class 2606 OID 18533)
-- Name: Pagamentos Pagamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_pkey" PRIMARY KEY (id_pagamento);


--
-- TOC entry 4698 (class 2606 OID 18535)
-- Name: Pedidos Pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_pkey" PRIMARY KEY (id_pedido);


--
-- TOC entry 4700 (class 2606 OID 18537)
-- Name: Produtos Produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produtos"
    ADD CONSTRAINT "Produtos_pkey" PRIMARY KEY (id_produto);


--
-- TOC entry 4703 (class 2606 OID 18539)
-- Name: usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id_usuario);


--
-- TOC entry 4706 (class 2606 OID 18541)
-- Name: pedidos pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id_pedido);


--
-- TOC entry 4708 (class 2606 OID 18543)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 4688 (class 1259 OID 18544)
-- Name: ingredientes_id_ingrediente; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ingredientes_id_ingrediente ON public."Ingredientes" USING btree (id_ingrediente);


--
-- TOC entry 4691 (class 1259 OID 18546)
-- Name: item_pedidos_id_item_pedido; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX item_pedidos_id_item_pedido ON public."ItemPedidos" USING btree (id_item_pedido);


--
-- TOC entry 4696 (class 1259 OID 18547)
-- Name: pagamentos_id_pagamento; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pagamentos_id_pagamento ON public."Pagamentos" USING btree (id_pagamento);


--
-- TOC entry 4704 (class 1259 OID 18548)
-- Name: pedidos_id_pedido; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pedidos_id_pedido ON public.pedidos USING btree (id_pedido);


--
-- TOC entry 4701 (class 1259 OID 18549)
-- Name: produtos_id_produto; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX produtos_id_produto ON public."Produtos" USING btree (id_produto);


--
-- TOC entry 4709 (class 2606 OID 18550)
-- Name: ItemPedidos ItemPedidos_id_pedido_item_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_id_pedido_item_pedido_fkey" FOREIGN KEY (id_pedido_item_pedido) REFERENCES public."Pedidos"(id_pedido) ON UPDATE CASCADE;


--
-- TOC entry 4710 (class 2606 OID 18555)
-- Name: ItemPedidos ItemPedidos_id_produto_item_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_id_produto_item_pedido_fkey" FOREIGN KEY (id_produto_item_pedido) REFERENCES public."Produtos"(id_produto) ON UPDATE CASCADE;


--
-- TOC entry 4711 (class 2606 OID 18560)
-- Name: Pagamentos Pagamentos_id_pedido_pagamento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_id_pedido_pagamento_fkey" FOREIGN KEY (id_pedido_pagamento) REFERENCES public."Pedidos"(id_pedido) ON UPDATE CASCADE;


--
-- TOC entry 4712 (class 2606 OID 18565)
-- Name: Pagamentos Pagamentos_id_usuario_pagamento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_id_usuario_pagamento_fkey" FOREIGN KEY (id_usuario_pagamento) REFERENCES public.usuarios(id_usuario) ON UPDATE CASCADE;


--
-- TOC entry 4713 (class 2606 OID 18570)
-- Name: Pedidos Pedidos_id_mesa_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_id_mesa_pedido_fkey" FOREIGN KEY (id_mesa_pedido) REFERENCES public."Mesas"(id_mesa) ON UPDATE CASCADE;


--
-- TOC entry 4714 (class 2606 OID 18575)
-- Name: Pedidos Pedidos_id_usuario_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_id_usuario_pedido_fkey" FOREIGN KEY (id_usuario_pedido) REFERENCES public.usuarios(id_usuario) ON UPDATE CASCADE;


--
-- TOC entry 4715 (class 2606 OID 18580)
-- Name: pedidos pedidos_id_usuario_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_id_usuario_pedido_fkey FOREIGN KEY (id_usuario_pedido) REFERENCES public.usuarios(id_usuario) ON UPDATE CASCADE;


-- Completed on 2024-11-12 13:40:38

--
-- PostgreSQL database dump complete
--

