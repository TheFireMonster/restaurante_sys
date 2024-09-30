--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-09-30 16:17:46

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 17682)
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
-- TOC entry 225 (class 1259 OID 17681)
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
-- TOC entry 4859 (class 0 OID 0)
-- Dependencies: 225
-- Name: Ingredientes_id_ingrediente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Ingredientes_id_ingrediente_seq" OWNED BY public."Ingredientes".id_ingrediente;


--
-- TOC entry 228 (class 1259 OID 17689)
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
-- TOC entry 227 (class 1259 OID 17683)
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
-- TOC entry 4860 (class 0 OID 0)
-- Dependencies: 227
-- Name: ItemPedidos_id_item_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ItemPedidos_id_item_pedido_seq" OWNED BY public."ItemPedidos".id_item_pedido;


--
-- TOC entry 218 (class 1259 OID 17614)
-- Name: Mesas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Mesas" (
    id_mesa integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Mesas" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17612)
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
-- TOC entry 4861 (class 0 OID 0)
-- Dependencies: 217
-- Name: Mesas_id_mesa_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Mesas_id_mesa_seq" OWNED BY public."Mesas".id_mesa;


--
-- TOC entry 224 (class 1259 OID 17664)
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
-- TOC entry 223 (class 1259 OID 17663)
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
-- TOC entry 4862 (class 0 OID 0)
-- Dependencies: 223
-- Name: Pagamentos_id_pagamento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pagamentos_id_pagamento_seq" OWNED BY public."Pagamentos".id_pagamento;


--
-- TOC entry 222 (class 1259 OID 17643)
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
-- TOC entry 221 (class 1259 OID 17642)
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
-- TOC entry 4863 (class 0 OID 0)
-- Dependencies: 221
-- Name: Pedidos_id_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pedidos_id_pedido_seq" OWNED BY public."Pedidos".id_pedido;


--
-- TOC entry 220 (class 1259 OID 17629)
-- Name: Produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Produtos" (
    id_produto integer NOT NULL,
    nome_produto character varying(255) NOT NULL,
    descricao_produto character varying(255) NOT NULL,
    preco_produto character varying(255) NOT NULL,
    quantidade_produto integer,
    tipo_produto character varying(255),
    produto_transformacao boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Produtos" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17628)
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
-- TOC entry 4864 (class 0 OID 0)
-- Dependencies: 219
-- Name: Produtos_id_produto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Produtos_id_produto_seq" OWNED BY public."Produtos".id_produto;


--
-- TOC entry 216 (class 1259 OID 17607)
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuarios" (
    id_usuario integer NOT NULL,
    senha_usuario character varying(255) NOT NULL,
    nome_usuario character varying(255) NOT NULL,
    cpf_usuario character varying(255) NOT NULL,
    telefone_usuario character varying(255),
    email_usuario character varying(255) NOT NULL,
    tipo_usuario character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Usuarios" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 17606)
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
-- TOC entry 4865 (class 0 OID 0)
-- Dependencies: 215
-- Name: Usuarios_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Usuarios_id_usuario_seq" OWNED BY public."Usuarios".id_usuario;


--
-- TOC entry 4670 (class 2604 OID 17686)
-- Name: Ingredientes id_ingrediente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredientes" ALTER COLUMN id_ingrediente SET DEFAULT nextval('public."Ingredientes_id_ingrediente_seq"'::regclass);


--
-- TOC entry 4671 (class 2604 OID 17692)
-- Name: ItemPedidos id_item_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos" ALTER COLUMN id_item_pedido SET DEFAULT nextval('public."ItemPedidos_id_item_pedido_seq"'::regclass);


--
-- TOC entry 4665 (class 2604 OID 17620)
-- Name: Mesas id_mesa; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mesas" ALTER COLUMN id_mesa SET DEFAULT nextval('public."Mesas_id_mesa_seq"'::regclass);


--
-- TOC entry 4669 (class 2604 OID 17667)
-- Name: Pagamentos id_pagamento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos" ALTER COLUMN id_pagamento SET DEFAULT nextval('public."Pagamentos_id_pagamento_seq"'::regclass);


--
-- TOC entry 4667 (class 2604 OID 17646)
-- Name: Pedidos id_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos" ALTER COLUMN id_pedido SET DEFAULT nextval('public."Pedidos_id_pedido_seq"'::regclass);


--
-- TOC entry 4666 (class 2604 OID 17632)
-- Name: Produtos id_produto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produtos" ALTER COLUMN id_produto SET DEFAULT nextval('public."Produtos_id_produto_seq"'::regclass);


--
-- TOC entry 4664 (class 2604 OID 17610)
-- Name: Usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id_usuario SET DEFAULT nextval('public."Usuarios_id_usuario_seq"'::regclass);


--
-- TOC entry 4851 (class 0 OID 17682)
-- Dependencies: 226
-- Data for Name: Ingredientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Ingredientes" (id_ingrediente, quantidade_ingrediente, unidade_medida, nome_ingrediente, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4853 (class 0 OID 17689)
-- Dependencies: 228
-- Data for Name: ItemPedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ItemPedidos" (id_item_pedido, id_pedido_item_pedido, quantidade_item_pedido, id_produto_item_pedido, valor_item_pedido, total_item_pedido, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4843 (class 0 OID 17614)
-- Dependencies: 218
-- Data for Name: Mesas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Mesas" (id_mesa, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4849 (class 0 OID 17664)
-- Dependencies: 224
-- Data for Name: Pagamentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pagamentos" (id_pagamento, data_pagamento, valor_pagamento, id_usuario_pagamento, id_pedido_pagamento, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4847 (class 0 OID 17643)
-- Dependencies: 222
-- Data for Name: Pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pedidos" (id_pedido, id_usuario_pedido, id_mesa_pedido, obs_pedido, status_pedido, data_pedido, total_pedido, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4845 (class 0 OID 17629)
-- Dependencies: 220
-- Data for Name: Produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Produtos" (id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4841 (class 0 OID 17607)
-- Dependencies: 216
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuarios" (id_usuario, senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario, tipo_usuario, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4866 (class 0 OID 0)
-- Dependencies: 225
-- Name: Ingredientes_id_ingrediente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Ingredientes_id_ingrediente_seq"', 1, false);


--
-- TOC entry 4867 (class 0 OID 0)
-- Dependencies: 227
-- Name: ItemPedidos_id_item_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ItemPedidos_id_item_pedido_seq"', 1, false);


--
-- TOC entry 4868 (class 0 OID 0)
-- Dependencies: 217
-- Name: Mesas_id_mesa_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Mesas_id_mesa_seq"', 1, false);


--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 223
-- Name: Pagamentos_id_pagamento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pagamentos_id_pagamento_seq"', 1, false);


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 221
-- Name: Pedidos_id_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pedidos_id_pedido_seq"', 1, false);


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 219
-- Name: Produtos_id_produto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Produtos_id_produto_seq"', 1, false);


--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 215
-- Name: Usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Usuarios_id_usuario_seq"', 1, false);


--
-- TOC entry 4686 (class 2606 OID 17688)
-- Name: Ingredientes Ingredientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ingredientes"
    ADD CONSTRAINT "Ingredientes_pkey" PRIMARY KEY (id_ingrediente);


--
-- TOC entry 4689 (class 2606 OID 17694)
-- Name: ItemPedidos ItemPedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_pkey" PRIMARY KEY (id_item_pedido);


--
-- TOC entry 4675 (class 2606 OID 17625)
-- Name: Mesas Mesas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mesas"
    ADD CONSTRAINT "Mesas_pkey" PRIMARY KEY (id_mesa);


--
-- TOC entry 4683 (class 2606 OID 17669)
-- Name: Pagamentos Pagamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_pkey" PRIMARY KEY (id_pagamento);


--
-- TOC entry 4680 (class 2606 OID 17651)
-- Name: Pedidos Pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_pkey" PRIMARY KEY (id_pedido);


--
-- TOC entry 4677 (class 2606 OID 17640)
-- Name: Produtos Produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produtos"
    ADD CONSTRAINT "Produtos_pkey" PRIMARY KEY (id_produto);


--
-- TOC entry 4673 (class 2606 OID 17638)
-- Name: Usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id_usuario);


--
-- TOC entry 4687 (class 1259 OID 17695)
-- Name: ingredientes_id_ingrediente; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ingredientes_id_ingrediente ON public."Ingredientes" USING btree (id_ingrediente);


--
-- TOC entry 4690 (class 1259 OID 17706)
-- Name: item_pedidos_id_item_pedido; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX item_pedidos_id_item_pedido ON public."ItemPedidos" USING btree (id_item_pedido);


--
-- TOC entry 4684 (class 1259 OID 17680)
-- Name: pagamentos_id_pagamento; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pagamentos_id_pagamento ON public."Pagamentos" USING btree (id_pagamento);


--
-- TOC entry 4681 (class 1259 OID 17662)
-- Name: pedidos_id_pedido; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pedidos_id_pedido ON public."Pedidos" USING btree (id_pedido);


--
-- TOC entry 4678 (class 1259 OID 17641)
-- Name: produtos_id_produto; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX produtos_id_produto ON public."Produtos" USING btree (id_produto);


--
-- TOC entry 4695 (class 2606 OID 17696)
-- Name: ItemPedidos ItemPedidos_id_pedido_item_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_id_pedido_item_pedido_fkey" FOREIGN KEY (id_pedido_item_pedido) REFERENCES public."Pedidos"(id_pedido) ON UPDATE CASCADE;


--
-- TOC entry 4696 (class 2606 OID 17701)
-- Name: ItemPedidos ItemPedidos_id_produto_item_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_id_produto_item_pedido_fkey" FOREIGN KEY (id_produto_item_pedido) REFERENCES public."Produtos"(id_produto) ON UPDATE CASCADE;


--
-- TOC entry 4693 (class 2606 OID 17675)
-- Name: Pagamentos Pagamentos_id_pedido_pagamento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_id_pedido_pagamento_fkey" FOREIGN KEY (id_pedido_pagamento) REFERENCES public."Pedidos"(id_pedido) ON UPDATE CASCADE;


--
-- TOC entry 4694 (class 2606 OID 17670)
-- Name: Pagamentos Pagamentos_id_usuario_pagamento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_id_usuario_pagamento_fkey" FOREIGN KEY (id_usuario_pagamento) REFERENCES public."Usuarios"(id_usuario) ON UPDATE CASCADE;


--
-- TOC entry 4691 (class 2606 OID 17657)
-- Name: Pedidos Pedidos_id_mesa_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_id_mesa_pedido_fkey" FOREIGN KEY (id_mesa_pedido) REFERENCES public."Mesas"(id_mesa) ON UPDATE CASCADE;


--
-- TOC entry 4692 (class 2606 OID 17652)
-- Name: Pedidos Pedidos_id_usuario_pedido_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_id_usuario_pedido_fkey" FOREIGN KEY (id_usuario_pedido) REFERENCES public."Usuarios"(id_usuario) ON UPDATE CASCADE;


-- Completed on 2024-09-30 16:17:47

--
-- PostgreSQL database dump complete
--

