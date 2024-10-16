
--
-- Name: genres; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.genres (
    genre_id character varying NOT NULL,
    genre_name character varying
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL
);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.genres (genre_id, genre_name) FROM stdin;
action	Action
adventure	Adventure
animation	Animation
comedy	Comedy
crime	Crime
documentary	Documentary
drama	Drama
family	Family
fantasy	Fantasy
history	History
horror	Horror
music	Music
mystery	Mystery
news	News
reality	Reality
romance	Romance
scifi	Science Fiction
talk	Talk Show
thriller	Thriller
war	War
western	Western
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.users (id, username, email) FROM stdin;
1	steph	steph@gmail.com
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: beigeh0ney
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);



