PGDMP                         {            restaurante    15.2    15.2 =    >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    16870    restaurante    DATABASE     �   CREATE DATABASE restaurante WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE restaurante;
                postgres    false            �            1259    16949    ingrediente    TABLE       CREATE TABLE public.ingrediente (
    id_ingrediente integer NOT NULL,
    quantidade_ingrediente integer NOT NULL,
    unidade_medida character varying(2),
    nome_ingrediente character varying(50) NOT NULL,
    validade_ingrediente date,
    data_producao date
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
       public          postgres    false    217            B           0    0    ingrediente_id_ingrediente_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.ingrediente_id_ingrediente_seq OWNED BY public.ingrediente.id_ingrediente;
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
       public          postgres    false    215            C           0    0    mesa_id_mesa_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.mesa_id_mesa_seq OWNED BY public.mesa.id_mesa;
          public          postgres    false    214            �            1259    16956 	   pagamento    TABLE     �   CREATE TABLE public.pagamento (
    id_pagamento integer NOT NULL,
    data_pagamento date NOT NULL,
    valor_pagamento numeric NOT NULL,
    id_usuario integer
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
       public          postgres    false    219            D           0    0    pagamento_id_pagamento_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.pagamento_id_pagamento_seq OWNED BY public.pagamento.id_pagamento;
          public          postgres    false    218            �            1259    17085    pedido    TABLE     y   CREATE TABLE public.pedido (
    id_pedido integer NOT NULL,
    numero_mesa integer NOT NULL,
    id_usuario integer
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
       public          postgres    false    225            E           0    0    pedido_id_pedido_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.pedido_id_pedido_seq OWNED BY public.pedido.id_pedido;
          public          postgres    false    224            �            1259    17031    produto    TABLE     �   CREATE TABLE public.produto (
    id_produto integer NOT NULL,
    nome_produto character varying(50) NOT NULL,
    quantidade_produto integer NOT NULL
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
       public          postgres    false    223            F           0    0    produto_id_produto_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.produto_id_produto_seq OWNED BY public.produto.id_produto;
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
       public          postgres    false    227            G           0    0    relatorio_id_relatorio_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.relatorio_id_relatorio_seq OWNED BY public.relatorio.id_relatorio;
          public          postgres    false    226            �            1259    16979    usuario    TABLE     c  CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    senha_usuario character varying(50) NOT NULL,
    nome_usuario character varying(50) NOT NULL,
    cpf_usuario character varying(14) NOT NULL,
    telefone_usuario character varying(14) NOT NULL,
    email_usuario character varying(50) NOT NULL,
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
       public          postgres    false    221            H           0    0    usuario_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;
          public          postgres    false    220            �           2604    16952    ingrediente id_ingrediente    DEFAULT     �   ALTER TABLE ONLY public.ingrediente ALTER COLUMN id_ingrediente SET DEFAULT nextval('public.ingrediente_id_ingrediente_seq'::regclass);
 I   ALTER TABLE public.ingrediente ALTER COLUMN id_ingrediente DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16931    mesa id_mesa    DEFAULT     l   ALTER TABLE ONLY public.mesa ALTER COLUMN id_mesa SET DEFAULT nextval('public.mesa_id_mesa_seq'::regclass);
 ;   ALTER TABLE public.mesa ALTER COLUMN id_mesa DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    16959    pagamento id_pagamento    DEFAULT     �   ALTER TABLE ONLY public.pagamento ALTER COLUMN id_pagamento SET DEFAULT nextval('public.pagamento_id_pagamento_seq'::regclass);
 E   ALTER TABLE public.pagamento ALTER COLUMN id_pagamento DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    17088    pedido id_pedido    DEFAULT     t   ALTER TABLE ONLY public.pedido ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedido_id_pedido_seq'::regclass);
 ?   ALTER TABLE public.pedido ALTER COLUMN id_pedido DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    17034    produto id_produto    DEFAULT     x   ALTER TABLE ONLY public.produto ALTER COLUMN id_produto SET DEFAULT nextval('public.produto_id_produto_seq'::regclass);
 A   ALTER TABLE public.produto ALTER COLUMN id_produto DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    17096    relatorio id_relatorio    DEFAULT     �   ALTER TABLE ONLY public.relatorio ALTER COLUMN id_relatorio SET DEFAULT nextval('public.relatorio_id_relatorio_seq'::regclass);
 E   ALTER TABLE public.relatorio ALTER COLUMN id_relatorio DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    16982    usuario id_usuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    221    220    221            1          0    16949    ingrediente 
   TABLE DATA           �   COPY public.ingrediente (id_ingrediente, quantidade_ingrediente, unidade_medida, nome_ingrediente, validade_ingrediente, data_producao) FROM stdin;
    public          postgres    false    217   �H       /          0    16928    mesa 
   TABLE DATA           '   COPY public.mesa (id_mesa) FROM stdin;
    public          postgres    false    215   
I       3          0    16956 	   pagamento 
   TABLE DATA           ^   COPY public.pagamento (id_pagamento, data_pagamento, valor_pagamento, id_usuario) FROM stdin;
    public          postgres    false    219   1I       9          0    17085    pedido 
   TABLE DATA           D   COPY public.pedido (id_pedido, numero_mesa, id_usuario) FROM stdin;
    public          postgres    false    225   �I       7          0    17031    produto 
   TABLE DATA           O   COPY public.produto (id_produto, nome_produto, quantidade_produto) FROM stdin;
    public          postgres    false    223   �I       ;          0    17093 	   relatorio 
   TABLE DATA           �   COPY public.relatorio (id_relatorio, data_relatorio, id_pagamento, id_usuario, id_produto, id_mesa, id_ingrediente, id_pedido) FROM stdin;
    public          postgres    false    227   0J       5          0    16979    usuario 
   TABLE DATA           �   COPY public.usuario (id_usuario, senha_usuario, nome_usuario, cpf_usuario, telefone_usuario, email_usuario, tipo_usuario) FROM stdin;
    public          postgres    false    221   �J       I           0    0    ingrediente_id_ingrediente_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.ingrediente_id_ingrediente_seq', 5, true);
          public          postgres    false    216            J           0    0    mesa_id_mesa_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.mesa_id_mesa_seq', 5, true);
          public          postgres    false    214            K           0    0    pagamento_id_pagamento_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.pagamento_id_pagamento_seq', 5, true);
          public          postgres    false    218            L           0    0    pedido_id_pedido_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pedido_id_pedido_seq', 12, true);
          public          postgres    false    224            M           0    0    produto_id_produto_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.produto_id_produto_seq', 5, true);
          public          postgres    false    222            N           0    0    relatorio_id_relatorio_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.relatorio_id_relatorio_seq', 20, true);
          public          postgres    false    226            O           0    0    usuario_id_usuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 6, true);
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
       public            postgres    false    221            �           2606    17440 #   pagamento pagamento_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pagamento
    ADD CONSTRAINT pagamento_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 M   ALTER TABLE ONLY public.pagamento DROP CONSTRAINT pagamento_id_usuario_fkey;
       public          postgres    false    3217    219    221            �           2606    17445    pedido pedido_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 G   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_id_usuario_fkey;
       public          postgres    false    221    3217    225            �           2606    17435    pedido pedido_numero_mesa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_numero_mesa_fkey FOREIGN KEY (numero_mesa) REFERENCES public.mesa(id_mesa);
 H   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_numero_mesa_fkey;
       public          postgres    false    225    215    3211            �           2606    17465     relatorio relatorio_id_mesa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_mesa_fkey FOREIGN KEY (id_mesa) REFERENCES public.mesa(id_mesa);
 J   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_mesa_fkey;
       public          postgres    false    227    3211    215            �           2606    17450 %   relatorio relatorio_id_pagamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_pagamento_fkey FOREIGN KEY (id_pagamento) REFERENCES public.pagamento(id_pagamento);
 O   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_pagamento_fkey;
       public          postgres    false    219    227    3215            �           2606    17470 "   relatorio relatorio_id_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_pedido_fkey FOREIGN KEY (id_pedido) REFERENCES public.pedido(id_pedido);
 L   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_pedido_fkey;
       public          postgres    false    227    225    3221            �           2606    17460 #   relatorio relatorio_id_produto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.produto(id_produto);
 M   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_produto_fkey;
       public          postgres    false    3219    223    227            �           2606    17455 #   relatorio relatorio_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relatorio
    ADD CONSTRAINT relatorio_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);
 M   ALTER TABLE ONLY public.relatorio DROP CONSTRAINT relatorio_id_usuario_fkey;
       public          postgres    false    221    3217    227            1   `   x�3�44�,���M,.N�4202�5��52���2�450�L/�,(J-.�+�G�7����ff�˚�L.H�LN�IL�n�)����ĒT4�=... n�$�      /      x�3�2�2�2�2����� ��      3   N   x�-���0�7�gR����Φ P��g�s+��E	P�?��eIҹ�0-K�k�p���ՇW��5      9      x�34�4�4�24�4�4����� �r      7   f   x�E�A
�@F�ur�\�2:����oZ!��э�WA����Z2lu�K� 1��(�L��(�5WP8>^|���~k��׼T(��D��"e�e���0�	��$T      ;   A   x���4202�5� "�?4�eh�7�52�&o�7�5�*o	�7�54�"4"o�k�M� �o!h      5   �  x�u��n�0Eף��X���M���B�v�͐�De*%-/���#P����ܑ`�(�s!"B�a�1��$��I"<�ͅ�S���Nsc�t�p�{!D/��)b�?c��G�S�#���<�y�$�"nL*���D�2i��%��k\M�@�4��t�2��O���WJ���	��V(EL�s��DDDS@�\�����<�;\�DKeߩR�Wa���jؿ@7�����%)�ڣs"�Hr)y��K�yi�g;�|D��t���}]
5��{c��ZЛ���n�q�TN�	�c2v]�'��@ҥHR+ϥ�������}�R�߅ا}��D�˙�s�0��~���k \�7��In�)��E⁤5�3��������FU�J.־��T}a7�<R=�6��w�u�?�)��     