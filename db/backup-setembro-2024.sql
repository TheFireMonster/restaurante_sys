PGDMP  
    ,            	    |            teste2    16.0    16.0 @    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17605    teste2    DATABASE     }   CREATE DATABASE teste2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE teste2;
                postgres    false            �            1259    17682    Ingredientes    TABLE     +  CREATE TABLE public."Ingredientes" (
    id_ingrediente integer NOT NULL,
    quantidade_ingrediente integer,
    unidade_medida character varying(2),
    nome_ingrediente character varying(50),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public."Ingredientes";
       public         heap    postgres    false            �            1259    17681    Ingredientes_id_ingrediente_seq    SEQUENCE     �   CREATE SEQUENCE public."Ingredientes_id_ingrediente_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."Ingredientes_id_ingrediente_seq";
       public          postgres    false    226            �           0    0    Ingredientes_id_ingrediente_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."Ingredientes_id_ingrediente_seq" OWNED BY public."Ingredientes".id_ingrediente;
          public          postgres    false    225            �            1259    17689    ItemPedidos    TABLE       CREATE TABLE public."ItemPedidos" (
    id_item_pedido integer NOT NULL,
    id_pedido_item_pedido integer NOT NULL,
    quantidade_item_pedido integer NOT NULL,
    id_produto_item_pedido integer NOT NULL,
    valor_item_pedido numeric(8,2),
    total_item_pedido numeric(8,2),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public."ItemPedidos";
       public         heap    postgres    false            �            1259    17683    ItemPedidos_id_item_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public."ItemPedidos_id_item_pedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."ItemPedidos_id_item_pedido_seq";
       public          postgres    false    228            �           0    0    ItemPedidos_id_item_pedido_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."ItemPedidos_id_item_pedido_seq" OWNED BY public."ItemPedidos".id_item_pedido;
          public          postgres    false    227            �            1259    17614    Mesas    TABLE     �   CREATE TABLE public."Mesas" (
    id_mesa integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Mesas";
       public         heap    postgres    false            �            1259    17612    Mesas_id_mesa_seq    SEQUENCE     �   CREATE SEQUENCE public."Mesas_id_mesa_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Mesas_id_mesa_seq";
       public          postgres    false    218            �           0    0    Mesas_id_mesa_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Mesas_id_mesa_seq" OWNED BY public."Mesas".id_mesa;
          public          postgres    false    217            �            1259    17664 
   Pagamentos    TABLE     d  CREATE TABLE public."Pagamentos" (
    id_pagamento integer NOT NULL,
    data_pagamento timestamp with time zone NOT NULL,
    valor_pagamento numeric(8,2) NOT NULL,
    id_usuario_pagamento integer NOT NULL,
    id_pedido_pagamento integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public."Pagamentos";
       public         heap    postgres    false            �            1259    17663    Pagamentos_id_pagamento_seq    SEQUENCE     �   CREATE SEQUENCE public."Pagamentos_id_pagamento_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."Pagamentos_id_pagamento_seq";
       public          postgres    false    224            �           0    0    Pagamentos_id_pagamento_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."Pagamentos_id_pagamento_seq" OWNED BY public."Pagamentos".id_pagamento;
          public          postgres    false    223            �            1259    17643    Pedidos    TABLE     �  CREATE TABLE public."Pedidos" (
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
    DROP TABLE public."Pedidos";
       public         heap    postgres    false            �            1259    17642    Pedidos_id_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public."Pedidos_id_pedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Pedidos_id_pedido_seq";
       public          postgres    false    222                        0    0    Pedidos_id_pedido_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."Pedidos_id_pedido_seq" OWNED BY public."Pedidos".id_pedido;
          public          postgres    false    221            �            1259    17629    Produtos    TABLE     �  CREATE TABLE public."Produtos" (
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
    DROP TABLE public."Produtos";
       public         heap    postgres    false            �            1259    17628    Produtos_id_produto_seq    SEQUENCE     �   CREATE SEQUENCE public."Produtos_id_produto_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Produtos_id_produto_seq";
       public          postgres    false    220                       0    0    Produtos_id_produto_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Produtos_id_produto_seq" OWNED BY public."Produtos".id_produto;
          public          postgres    false    219            �            1259    17607    Usuarios    TABLE     �  CREATE TABLE public."Usuarios" (
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
    DROP TABLE public."Usuarios";
       public         heap    postgres    false            �            1259    17606    Usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public."Usuarios_id_usuario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Usuarios_id_usuario_seq";
       public          postgres    false    216                       0    0    Usuarios_id_usuario_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Usuarios_id_usuario_seq" OWNED BY public."Usuarios".id_usuario;
          public          postgres    false    215            >           2604    17686    Ingredientes id_ingrediente    DEFAULT     �   ALTER TABLE ONLY public."Ingredientes" ALTER COLUMN id_ingrediente SET DEFAULT nextval('public."Ingredientes_id_ingrediente_seq"'::regclass);
 L   ALTER TABLE public."Ingredientes" ALTER COLUMN id_ingrediente DROP DEFAULT;
       public          postgres    false    226    225    226            ?           2604    17692    ItemPedidos id_item_pedido    DEFAULT     �   ALTER TABLE ONLY public."ItemPedidos" ALTER COLUMN id_item_pedido SET DEFAULT nextval('public."ItemPedidos_id_item_pedido_seq"'::regclass);
 K   ALTER TABLE public."ItemPedidos" ALTER COLUMN id_item_pedido DROP DEFAULT;
       public          postgres    false    228    227    228            9           2604    17620    Mesas id_mesa    DEFAULT     r   ALTER TABLE ONLY public."Mesas" ALTER COLUMN id_mesa SET DEFAULT nextval('public."Mesas_id_mesa_seq"'::regclass);
 >   ALTER TABLE public."Mesas" ALTER COLUMN id_mesa DROP DEFAULT;
       public          postgres    false    217    218    218            =           2604    17667    Pagamentos id_pagamento    DEFAULT     �   ALTER TABLE ONLY public."Pagamentos" ALTER COLUMN id_pagamento SET DEFAULT nextval('public."Pagamentos_id_pagamento_seq"'::regclass);
 H   ALTER TABLE public."Pagamentos" ALTER COLUMN id_pagamento DROP DEFAULT;
       public          postgres    false    224    223    224            ;           2604    17646    Pedidos id_pedido    DEFAULT     z   ALTER TABLE ONLY public."Pedidos" ALTER COLUMN id_pedido SET DEFAULT nextval('public."Pedidos_id_pedido_seq"'::regclass);
 B   ALTER TABLE public."Pedidos" ALTER COLUMN id_pedido DROP DEFAULT;
       public          postgres    false    222    221    222            :           2604    17632    Produtos id_produto    DEFAULT     ~   ALTER TABLE ONLY public."Produtos" ALTER COLUMN id_produto SET DEFAULT nextval('public."Produtos_id_produto_seq"'::regclass);
 D   ALTER TABLE public."Produtos" ALTER COLUMN id_produto DROP DEFAULT;
       public          postgres    false    220    219    220            8           2604    17610    Usuarios id_usuario    DEFAULT     ~   ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id_usuario SET DEFAULT nextval('public."Usuarios_id_usuario_seq"'::regclass);
 D   ALTER TABLE public."Usuarios" ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    17682    Ingredientes 
   TABLE DATA           �   COPY public."Ingredientes" (id_ingrediente, quantidade_ingrediente, unidade_medida, nome_ingrediente, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   T       �          0    17689    ItemPedidos 
   TABLE DATA           �   COPY public."ItemPedidos" (id_item_pedido, id_pedido_item_pedido, quantidade_item_pedido, id_produto_item_pedido, valor_item_pedido, total_item_pedido, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   T       �          0    17614    Mesas 
   TABLE DATA           D   COPY public."Mesas" (id_mesa, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   <T       �          0    17664 
   Pagamentos 
   TABLE DATA           �   COPY public."Pagamentos" (id_pagamento, data_pagamento, valor_pagamento, id_usuario_pagamento, id_pedido_pagamento, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   YT       �          0    17643    Pedidos 
   TABLE DATA           �   COPY public."Pedidos" (id_pedido, id_usuario_pedido, id_mesa_pedido, obs_pedido, status_pedido, data_pedido, total_pedido, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   vT       �          0    17629    Produtos 
   TABLE DATA           �   COPY public."Produtos" (id_produto, nome_produto, descricao_produto, preco_produto, quantidade_produto, tipo_produto, produto_transformacao, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �T       �          0    17607    Usuarios 
   TABLE DATA           �   COPY public."Usuarios" (id_usuario, senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario, tipo_usuario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �T                  0    0    Ingredientes_id_ingrediente_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."Ingredientes_id_ingrediente_seq"', 1, false);
          public          postgres    false    225                       0    0    ItemPedidos_id_item_pedido_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."ItemPedidos_id_item_pedido_seq"', 1, false);
          public          postgres    false    227                       0    0    Mesas_id_mesa_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Mesas_id_mesa_seq"', 1, false);
          public          postgres    false    217                       0    0    Pagamentos_id_pagamento_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."Pagamentos_id_pagamento_seq"', 1, false);
          public          postgres    false    223                       0    0    Pedidos_id_pedido_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Pedidos_id_pedido_seq"', 1, false);
          public          postgres    false    221                       0    0    Produtos_id_produto_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Produtos_id_produto_seq"', 1, false);
          public          postgres    false    219            	           0    0    Usuarios_id_usuario_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Usuarios_id_usuario_seq"', 1, false);
          public          postgres    false    215            N           2606    17688    Ingredientes Ingredientes_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."Ingredientes"
    ADD CONSTRAINT "Ingredientes_pkey" PRIMARY KEY (id_ingrediente);
 L   ALTER TABLE ONLY public."Ingredientes" DROP CONSTRAINT "Ingredientes_pkey";
       public            postgres    false    226            Q           2606    17694    ItemPedidos ItemPedidos_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_pkey" PRIMARY KEY (id_item_pedido);
 J   ALTER TABLE ONLY public."ItemPedidos" DROP CONSTRAINT "ItemPedidos_pkey";
       public            postgres    false    228            C           2606    17625    Mesas Mesas_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Mesas"
    ADD CONSTRAINT "Mesas_pkey" PRIMARY KEY (id_mesa);
 >   ALTER TABLE ONLY public."Mesas" DROP CONSTRAINT "Mesas_pkey";
       public            postgres    false    218            K           2606    17669    Pagamentos Pagamentos_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_pkey" PRIMARY KEY (id_pagamento);
 H   ALTER TABLE ONLY public."Pagamentos" DROP CONSTRAINT "Pagamentos_pkey";
       public            postgres    false    224            H           2606    17651    Pedidos Pedidos_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_pkey" PRIMARY KEY (id_pedido);
 B   ALTER TABLE ONLY public."Pedidos" DROP CONSTRAINT "Pedidos_pkey";
       public            postgres    false    222            E           2606    17640    Produtos Produtos_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Produtos"
    ADD CONSTRAINT "Produtos_pkey" PRIMARY KEY (id_produto);
 D   ALTER TABLE ONLY public."Produtos" DROP CONSTRAINT "Produtos_pkey";
       public            postgres    false    220            A           2606    17638    Usuarios Usuarios_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id_usuario);
 D   ALTER TABLE ONLY public."Usuarios" DROP CONSTRAINT "Usuarios_pkey";
       public            postgres    false    216            O           1259    17695    ingredientes_id_ingrediente    INDEX     g   CREATE UNIQUE INDEX ingredientes_id_ingrediente ON public."Ingredientes" USING btree (id_ingrediente);
 /   DROP INDEX public.ingredientes_id_ingrediente;
       public            postgres    false    226            R           1259    17706    item_pedidos_id_item_pedido    INDEX     f   CREATE UNIQUE INDEX item_pedidos_id_item_pedido ON public."ItemPedidos" USING btree (id_item_pedido);
 /   DROP INDEX public.item_pedidos_id_item_pedido;
       public            postgres    false    228            L           1259    17680    pagamentos_id_pagamento    INDEX     _   CREATE UNIQUE INDEX pagamentos_id_pagamento ON public."Pagamentos" USING btree (id_pagamento);
 +   DROP INDEX public.pagamentos_id_pagamento;
       public            postgres    false    224            I           1259    17662    pedidos_id_pedido    INDEX     S   CREATE UNIQUE INDEX pedidos_id_pedido ON public."Pedidos" USING btree (id_pedido);
 %   DROP INDEX public.pedidos_id_pedido;
       public            postgres    false    222            F           1259    17641    produtos_id_produto    INDEX     W   CREATE UNIQUE INDEX produtos_id_produto ON public."Produtos" USING btree (id_produto);
 '   DROP INDEX public.produtos_id_produto;
       public            postgres    false    220            W           2606    17696 2   ItemPedidos ItemPedidos_id_pedido_item_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_id_pedido_item_pedido_fkey" FOREIGN KEY (id_pedido_item_pedido) REFERENCES public."Pedidos"(id_pedido) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."ItemPedidos" DROP CONSTRAINT "ItemPedidos_id_pedido_item_pedido_fkey";
       public          postgres    false    4680    228    222            X           2606    17701 3   ItemPedidos ItemPedidos_id_produto_item_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."ItemPedidos"
    ADD CONSTRAINT "ItemPedidos_id_produto_item_pedido_fkey" FOREIGN KEY (id_produto_item_pedido) REFERENCES public."Produtos"(id_produto) ON UPDATE CASCADE;
 a   ALTER TABLE ONLY public."ItemPedidos" DROP CONSTRAINT "ItemPedidos_id_produto_item_pedido_fkey";
       public          postgres    false    220    4677    228            U           2606    17675 .   Pagamentos Pagamentos_id_pedido_pagamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_id_pedido_pagamento_fkey" FOREIGN KEY (id_pedido_pagamento) REFERENCES public."Pedidos"(id_pedido) ON UPDATE CASCADE;
 \   ALTER TABLE ONLY public."Pagamentos" DROP CONSTRAINT "Pagamentos_id_pedido_pagamento_fkey";
       public          postgres    false    4680    222    224            V           2606    17670 /   Pagamentos Pagamentos_id_usuario_pagamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pagamentos"
    ADD CONSTRAINT "Pagamentos_id_usuario_pagamento_fkey" FOREIGN KEY (id_usuario_pagamento) REFERENCES public."Usuarios"(id_usuario) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."Pagamentos" DROP CONSTRAINT "Pagamentos_id_usuario_pagamento_fkey";
       public          postgres    false    4673    216    224            S           2606    17657 #   Pedidos Pedidos_id_mesa_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_id_mesa_pedido_fkey" FOREIGN KEY (id_mesa_pedido) REFERENCES public."Mesas"(id_mesa) ON UPDATE CASCADE;
 Q   ALTER TABLE ONLY public."Pedidos" DROP CONSTRAINT "Pedidos_id_mesa_pedido_fkey";
       public          postgres    false    222    4675    218            T           2606    17652 &   Pedidos Pedidos_id_usuario_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pedidos"
    ADD CONSTRAINT "Pedidos_id_usuario_pedido_fkey" FOREIGN KEY (id_usuario_pedido) REFERENCES public."Usuarios"(id_usuario) ON UPDATE CASCADE;
 T   ALTER TABLE ONLY public."Pedidos" DROP CONSTRAINT "Pedidos_id_usuario_pedido_fkey";
       public          postgres    false    222    216    4673            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     