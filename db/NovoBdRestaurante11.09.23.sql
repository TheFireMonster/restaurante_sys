PGDMP                         {            restaurante    15.2    15.2 N    q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            r           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            s           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            t           1262    16870    restaurante    DATABASE     �   CREATE DATABASE restaurante WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE restaurante;
                postgres    false            �           1247    17727    tipo_usuario    TYPE     O   CREATE TYPE public.tipo_usuario AS ENUM (
    'cliente',
    'funcionário'
);
    DROP TYPE public.tipo_usuario;
       public          postgres    false            �            1259    16949    ingrediente    TABLE     �   CREATE TABLE public.ingrediente (
    id_ingrediente integer NOT NULL,
    quantidade_ingrediente integer NOT NULL,
    unidade_medida character varying(2),
    nome_ingrediente character varying(50) NOT NULL
);
    DROP TABLE public.ingrediente;
       public         heap    postgres    false            �            1259    16948    ingrediente_id_ingrediente_seq    SEQUENCE     �   CREATE SEQUENCE public.ingrediente_id_ingrediente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.ingrediente_id_ingrediente_seq;
       public          postgres    false    217            u           0    0    ingrediente_id_ingrediente_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.ingrediente_id_ingrediente_seq OWNED BY public.ingrediente.id_ingrediente;
          public          postgres    false    216            �            1259    16928    mesa    TABLE     ;   CREATE TABLE public.mesa (
    id_mesa integer NOT NULL
);
    DROP TABLE public.mesa;
       public         heap    postgres    false            �            1259    16927    mesa_id_mesa_seq    SEQUENCE     �   CREATE SEQUENCE public.mesa_id_mesa_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.mesa_id_mesa_seq;
       public          postgres    false    215            v           0    0    mesa_id_mesa_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.mesa_id_mesa_seq OWNED BY public.mesa.id_mesa;
          public          postgres    false    214            �            1259    16956 	   pagamento    TABLE     �   CREATE TABLE public.pagamento (
    id_pagamento integer NOT NULL,
    data_pagamento date NOT NULL,
    valor_pagamento numeric NOT NULL,
    id_usuario integer,
    id_pedido integer
);
    DROP TABLE public.pagamento;
       public         heap    postgres    false            �            1259    16955    pagamento_id_pagamento_seq    SEQUENCE     �   CREATE SEQUENCE public.pagamento_id_pagamento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.pagamento_id_pagamento_seq;
       public          postgres    false    219            w           0    0    pagamento_id_pagamento_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.pagamento_id_pagamento_seq OWNED BY public.pagamento.id_pagamento;
          public          postgres    false    218            �            1259    17085    pedido    TABLE     �   CREATE TABLE public.pedido (
    id_pedido integer NOT NULL,
    numero_mesa integer NOT NULL,
    id_usuario integer,
    id_produto integer,
    quantidade_produto integer,
    valor_total_pedido character varying
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    17083    pedido_id_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_id_pedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.pedido_id_pedido_seq;
       public          postgres    false    225            x           0    0    pedido_id_pedido_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.pedido_id_pedido_seq OWNED BY public.pedido.id_pedido;
          public          postgres    false    224            �            1259    17031    produto    TABLE     !  CREATE TABLE public.produto (
    id_produto integer NOT NULL,
    nome_produto character varying(50) NOT NULL,
    quantidade_produto integer,
    valor_produto money,
    tipo_produto character varying(50),
    produto_transformacao boolean,
    tamanho_produto character varying(50)
);
    DROP TABLE public.produto;
       public         heap    postgres    false            �            1259    17030    produto_id_produto_seq    SEQUENCE     �   CREATE SEQUENCE public.produto_id_produto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.produto_id_produto_seq;
       public          postgres    false    223            y           0    0    produto_id_produto_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.produto_id_produto_seq OWNED BY public.produto.id_produto;
          public          postgres    false    222            �            1259    17093 	   relatorio    TABLE     �   CREATE TABLE public.relatorio (
    id_relatorio integer NOT NULL,
    data_relatorio date NOT NULL,
    id_pagamento integer,
    id_usuario integer,
    id_produto integer,
    id_mesa integer,
    id_ingrediente integer,
    id_pedido integer
);
    DROP TABLE public.relatorio;
       public         heap    postgres    false            �            1259    17092    relatorio_id_relatorio_seq    SEQUENCE     �   CREATE SEQUENCE public.relatorio_id_relatorio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.relatorio_id_relatorio_seq;
       public          postgres    false    227            z           0    0    relatorio_id_relatorio_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.relatorio_id_relatorio_seq OWNED BY public.relatorio.id_relatorio;
          public          postgres    false    226            �            1259    16979    usuario    TABLE     ?  CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    senha_usuario character varying(50),
    nome_usuario character varying(50) NOT NULL,
    cpf_usuario character varying(14),
    telefone_usuario character varying(14),
    email_usuario character varying(50),
    tipo_usuario character varying(15)
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    16978    usuario_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_id_usuario_seq;
       public          postgres    false    221            {           0    0    usuario_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;
          public          postgres    false    220            �            1259    17685    vw_id_usuario_and_nome_usuario    VIEW     �   CREATE VIEW public.vw_id_usuario_and_nome_usuario AS
 SELECT usuario.id_usuario,
    usuario.nome_usuario
   FROM public.usuario;
 1   DROP VIEW public.vw_id_usuario_and_nome_usuario;
       public          postgres    false    221    221            �            1259    17718    vw_ingrediente_gr    VIEW       CREATE VIEW public.vw_ingrediente_gr AS
 SELECT ingrediente.quantidade_ingrediente,
    ingrediente.unidade_medida,
    ingrediente.nome_ingrediente
   FROM public.ingrediente
  WHERE ((ingrediente.unidade_medida)::text = 'gr'::text)
  ORDER BY ingrediente.id_ingrediente;
 $   DROP VIEW public.vw_ingrediente_gr;
       public          postgres    false    217    217    217    217            �            1259    17698    vw_ingrediente_min    VIEW     �  CREATE VIEW public.vw_ingrediente_min AS
 SELECT ingrediente.id_ingrediente,
    ingrediente.nome_ingrediente,
    ingrediente.quantidade_ingrediente,
    ingrediente.unidade_medida
   FROM public.ingrediente
  WHERE (ingrediente.quantidade_ingrediente IN ( SELECT min(ingrediente_1.quantidade_ingrediente) AS min
           FROM public.ingrediente ingrediente_1))
  ORDER BY ingrediente.id_ingrediente;
 %   DROP VIEW public.vw_ingrediente_min;
       public          postgres    false    217    217    217    217            �            1259    17714    vw_ingrediente_pc    VIEW       CREATE VIEW public.vw_ingrediente_pc AS
 SELECT ingrediente.quantidade_ingrediente,
    ingrediente.unidade_medida,
    ingrediente.nome_ingrediente
   FROM public.ingrediente
  WHERE ((ingrediente.unidade_medida)::text = 'pc'::text)
  ORDER BY ingrediente.id_ingrediente;
 $   DROP VIEW public.vw_ingrediente_pc;
       public          postgres    false    217    217    217    217            �            1259    17710    vw_ingrediente_un    VIEW       CREATE VIEW public.vw_ingrediente_un AS
 SELECT ingrediente.quantidade_ingrediente,
    ingrediente.unidade_medida,
    ingrediente.nome_ingrediente
   FROM public.ingrediente
  WHERE ((ingrediente.unidade_medida)::text = 'un'::text)
  ORDER BY ingrediente.id_ingrediente;
 $   DROP VIEW public.vw_ingrediente_un;
       public          postgres    false    217    217    217    217            �            1259    17722    vw_produto_min    VIEW     O  CREATE VIEW public.vw_produto_min AS
 SELECT produto.id_produto,
    produto.nome_produto,
    produto.quantidade_produto,
    produto.valor_produto
   FROM public.produto
  WHERE (produto.quantidade_produto IN ( SELECT min(produto_1.quantidade_produto) AS min
           FROM public.produto produto_1))
  ORDER BY produto.id_produto;
 !   DROP VIEW public.vw_produto_min;
       public          postgres    false    223    223    223    223            �            1259    17702    vw_produto_total    VIEW     �   CREATE VIEW public.vw_produto_total AS
 SELECT (sum(produto.quantidade_produto) * count(produto.id_produto)) AS estoque_produto
   FROM public.produto;
 #   DROP VIEW public.vw_produto_total;
       public          postgres    false    223    223            �            1259    17706    vw_usuario_pedido    VIEW       CREATE VIEW public.vw_usuario_pedido AS
 SELECT pedido.id_pedido,
    pedido.numero_mesa,
    pedido.id_usuario,
    usuario.nome_usuario,
    usuario.tipo_usuario
   FROM (public.pedido
     JOIN public.usuario ON ((usuario.id_usuario = pedido.id_usuario)));
 $   DROP VIEW public.vw_usuario_pedido;
       public          postgres    false    221    225    225    225    221    221            �           2604    16952    ingrediente id_ingrediente    DEFAULT     �   ALTER TABLE ONLY public.ingrediente ALTER COLUMN id_ingrediente SET DEFAULT nextval('public.ingrediente_id_ingrediente_seq'::regclass);
 I   ALTER TABLE public.ingrediente ALTER COLUMN id_ingrediente DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16931    mesa id_mesa    DEFAULT     l   ALTER TABLE ONLY public.mesa ALTER COLUMN id_mesa SET DEFAULT nextval('public.mesa_id_mesa_seq'::regclass);
 ;   ALTER TABLE public.mesa ALTER COLUMN id_mesa DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    16959    pagamento id_pagamento    DEFAULT     �   ALTER TABLE ONLY public.pagamento ALTER COLUMN id_pagamento SET DEFAULT nextval('public.pagamento_id_pagamento_seq'::regclass);
 E   ALTER TABLE public.pagamento ALTER COLUMN id_pagamento DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    17088    pedido id_pedido    DEFAULT     t   ALTER TABLE ONLY public.pedido ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedido_id_pedido_seq'::regclass);
 ?   ALTER TABLE public.pedido ALTER COLUMN id_pedido DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    17034    produto id_produto    DEFAULT     x   ALTER TABLE ONLY public.produto ALTER COLUMN id_produto SET DEFAULT nextval('public.produto_id_produto_seq'::regclass);
 A   ALTER TABLE public.produto ALTER COLUMN id_produto DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    17096    relatorio id_relatorio    DEFAULT     �   ALTER TABLE ONLY public.relatorio ALTER COLUMN id_relatorio SET DEFAULT nextval('public.relatorio_id_relatorio_seq'::regclass);
 E   ALTER TABLE public.relatorio ALTER COLUMN id_relatorio DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    16982    usuario id_usuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    220    221    221            d          0    16949    ingrediente 
   TABLE DATA           o   COPY public.ingrediente (id_ingrediente, quantidade_ingrediente, unidade_medida, nome_ingrediente) FROM stdin;
    public          postgres    false    217   �b       b          0    16928    mesa 
   TABLE DATA           '   COPY public.mesa (id_mesa) FROM stdin;
    public          postgres    false    215   @c       f          0    16956 	   pagamento 
   TABLE DATA           i   COPY public.pagamento (id_pagamento, data_pagamento, valor_pagamento, id_usuario, id_pedido) FROM stdin;
    public          postgres    false    219   rc       l          0    17085    pedido 
   TABLE DATA           x   COPY public.pedido (id_pedido, numero_mesa, id_usuario, id_produto, quantidade_produto, valor_total_pedido) FROM stdin;
    public          postgres    false    225   �c       j          0    17031    produto 
   TABLE DATA           �   COPY public.produto (id_produto, nome_produto, quantidade_produto, valor_produto, tipo_produto, produto_transformacao, tamanho_produto) FROM stdin;
    public          postgres    false    223   -d       n          0    17093 	   relatorio 
   TABLE DATA           �   COPY public.relatorio (id_relatorio, data_relatorio, id_pagamento, id_usuario, id_produto, id_mesa, id_ingrediente, id_pedido) FROM stdin;
    public          postgres    false    227   �d       h          0    16979    usuario 
   TABLE DATA           �   COPY public.usuario (id_usuario, senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario, tipo_usuario) FROM stdin;
    public          postgres    false    221   /e       |           0    0    ingrediente_id_ingrediente_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.ingrediente_id_ingrediente_seq', 17, true);
          public          postgres    false    216            }           0    0    mesa_id_mesa_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.mesa_id_mesa_seq', 5, true);
          public          postgres    false    214            ~           0    0    pagamento_id_pagamento_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pagamento_id_pagamento_seq', 6, true);
          public          postgres    false    218                       0    0    pedido_id_pedido_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pedido_id_pedido_seq', 16, true);
          public          postgres    false    224            �           0    0    produto_id_produto_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.produto_id_produto_seq', 8, true);
          public          postgres    false    222            �           0    0    relatorio_id_relatorio_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.relatorio_id_relatorio_seq', 20, true);
          public          postgres    false    226            �           0    0    usuario_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 14, true);
          public          postgres    false    220            �           2606    16954    ingrediente ingrediente_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.ingrediente
    ADD CONSTRAINT ingrediente_pkey PRIMARY KEY (id_ingrediente);
 F   ALTER TABLE ONLY public.ingrediente DROP CONSTRAINT ingrediente_pkey;
       public            postgres    false    217            �           2606    16933    mesa mesa_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.mesa
    ADD CONSTRAINT mesa_pkey PRIMARY KEY (id_mesa);
 8   ALTER TABLE ONLY public.mesa DROP CONSTRAINT mesa_pkey;
       public            postgres    false    215            �           2606    16963    pagamento pagamento_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_pkey PRIMARY KEY (id_pagamento);
 B   ALTER TABLE ONLY public.pagamento DROP CONSTRAINT pagamento_pkey;
       public            postgres    false    219            �           2606    17091    pedido pedido_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_pkey PRIMARY KEY (id_pedido);
 <   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_pkey;
       public            postgres    false    225            �           2606    17036    produto produto_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id_produto);
 >   ALTER TABLE ONLY public.produto DROP CONSTRAINT produto_pkey;
       public            postgres    false    223            �           2606    17098    relatorio relatorio_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_pkey PRIMARY KEY (id_relatorio);
 B   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_pkey;
       public            postgres    false    227            �           2606    16984    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    221            �           1259    17697    idx_ingrediente    INDEX     Q   CREATE INDEX idx_ingrediente ON public.ingrediente USING btree (id_ingrediente);
 #   DROP INDEX public.idx_ingrediente;
       public            postgres    false    217            �           1259    17696    idx_pagamento    INDEX     K   CREATE INDEX idx_pagamento ON public.pagamento USING btree (id_pagamento);
 !   DROP INDEX public.idx_pagamento;
       public            postgres    false    219            �           1259    17695 
   idx_pedido    INDEX     B   CREATE INDEX idx_pedido ON public.pedido USING btree (id_pedido);
    DROP INDEX public.idx_pedido;
       public            postgres    false    225            �           1259    17694    idx_produto    INDEX     E   CREATE INDEX idx_produto ON public.produto USING btree (id_produto);
    DROP INDEX public.idx_produto;
       public            postgres    false    223            �           1259    17693    idx_usuario    INDEX     E   CREATE INDEX idx_usuario ON public.usuario USING btree (id_usuario);
    DROP INDEX public.idx_usuario;
       public            postgres    false    221            �           2606    17440 #   pagamento pagamento_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 M   ALTER TABLE ONLY public.pagamento DROP CONSTRAINT pagamento_id_usuario_fkey;
       public          postgres    false    219    3255    221            �           2606    17567    pedido pedido_id_produto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id_produto);
 G   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_id_produto_fkey;
       public          postgres    false    223    225    3258            �           2606    17572    pedido pedido_id_produto_fkey1    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_id_produto_fkey1 FOREIGN KEY (id_produto) REFERENCES public.produto(id_produto);
 H   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_id_produto_fkey1;
       public          postgres    false    223    225    3258            �           2606    17577    pedido pedido_id_produto_fkey2    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_id_produto_fkey2 FOREIGN KEY (id_produto) REFERENCES public.produto(id_produto);
 H   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_id_produto_fkey2;
       public          postgres    false    225    223    3258            �           2606    17445    pedido pedido_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 G   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_id_usuario_fkey;
       public          postgres    false    3255    221    225            �           2606    17435    pedido pedido_numero_mesa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_numero_mesa_fkey FOREIGN KEY (numero_mesa) REFERENCES public.mesa(id_mesa);
 H   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_numero_mesa_fkey;
       public          postgres    false    215    3246    225            �           2606    17465     relatorio relatorio_id_mesa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_mesa_fkey FOREIGN KEY (id_mesa) REFERENCES public.mesa(id_mesa);
 J   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_mesa_fkey;
       public          postgres    false    227    215    3246            �           2606    17450 %   relatorio relatorio_id_pagamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_pagamento_fkey FOREIGN KEY (id_pagamento) REFERENCES public.pagamento(id_pagamento);
 O   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_pagamento_fkey;
       public          postgres    false    227    3252    219            �           2606    17470 "   relatorio relatorio_id_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_pedido_fkey FOREIGN KEY (id_pedido) REFERENCES public.pedido(id_pedido);
 L   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_pedido_fkey;
       public          postgres    false    227    225    3261            �           2606    17460 #   relatorio relatorio_id_produto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id_produto);
 M   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_produto_fkey;
       public          postgres    false    223    227    3258            �           2606    17455 #   relatorio relatorio_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 M   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_usuario_fkey;
       public          postgres    false    227    221    3255            d   �   x�5���0Dϫ*����MP�#�c'f(�|��7O[�1}ƫHx(հ����]�����i�%-J�Ɣ�EG^�Z8����.s�J��<{�9�40�
͞%��)l}f�dw�e-�߀(au����A�����LD_��1;      b   "   x�3�2�2�2�2�2�2���24������ ,�K      f   X   x�-��	�@г����u�K��#2�)V Gi��p��XRDjy��ʑ�P܉�V s�p�&���g����b��_e����      l   C   x�M���@��,�I�%va�9Hh��峭B�ɶ�w�Z~$'$���B��i�K�Գ�s�O3{ �nZ      j   �   x�}ϻ�0����):8�)"E_����P���{q��������O�4F��)�)����0J��[!��v�n�\X	�0M�G�c��<�Y*gf��h;b(�/z ��-�U��&������1�@6�B���٪���"�E��J�d��[T�.N�+7�3�E��co�Y�      n   ;   x�34�4202�50�52���CC\�PyS]c��Py]C,�@C!�F������qqq 5�      h   �  x�uRˎ1<w��?��ߏl�]@� $8����N��x���!_��� %�>�T.��!��N"�BD�BE�yiL�!I'x�O���64be��0������F�H)�J��l���m���&{HS�y(X�ҀR�d'��$""�Z4�P�[��ix�N����oT)W�9�QJ5Z�1�� ۳�N�.�Fk�@I
��H�w$��R���䘧��w���ȾvX�����������x��I�d�<Ӑ����K��V�K�;u*�@�����ۂ㉎�k�\�oB�ȗɿ��v'�:�-9eZ���"�5�z��q��_;��N��b��������2��g��5R?,�s�>S9�j���}�嬆>��G.��-������yʧ�梽4�������     