--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

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
-- Name: genres; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.genres (
    genre_id character varying NOT NULL,
    genre_name character varying
);


ALTER TABLE public.genres OWNER TO beigeh0ney;

--
-- Name: reviews; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    user_id integer NOT NULL,
    movie_id character varying NOT NULL,
    review_body text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.reviews OWNER TO beigeh0ney;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: beigeh0ney
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO beigeh0ney;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: beigeh0ney
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying NOT NULL,
    email character varying NOT NULL
);


ALTER TABLE public.users OWNER TO beigeh0ney;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: beigeh0ney
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO beigeh0ney;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: beigeh0ney
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.genres (genre_id, genre_name) FROM stdin;
action  Action
adventure       Adventure
animation       Animation
comedy  Comedy
crime   Crime
documentary     Documentary
drama   Drama
family  Family
fantasy Fantasy
history History
horror  Horror
music   Music
mystery Mystery
news    News
reality Reality
romance Romance
scifi   Science Fiction
talk    Talk Show
thriller        Thriller
war     War
western Western
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.reviews (id, user_id, movie_id, review_body, created_at) FROM stdin;
1       2       56608   #Captured dives into the dark side of the human psyche, blending horror and thriller elements effectively. The film follows a group of friends who find themselves ensnared in a web of fear and paranoia after an ill-fated adventure. Lizze Gordon delivers a standout performance, capturing the raw emotion and terror of her character. While the plot has some predictable twists, the intense atmosphere and chilling cinematography keep viewers engaged. Fans of the genre may find it a worthwhile watch, especially for its tension and suspenseful moments.   2024-10-17 14:08:55.905999
2       1       56608   Despite its intriguing premise, #Captured ultimately falls short of its potential. The film starts strong, setting up a gripping scenario that promises thrills and chills. However, as the story unfolds, the pacing drags, and character development is lacking. While some performances are commendable, particularly by Cody Renee Cameron, the script fails to deliver memorable dialogue or compelling motivations. Horror enthusiasts may appreciate a few jump scares, but overall, it feels like a missed opportunity to explore deeper themes of captivity and survival.        2024-10-17 14:10:08.834332
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.users (id, username, email) FROM stdin;
1       steph   steph@gmail.com
2       cinephile415    movies@gmail.com
\.


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: beigeh0ney
--

SELECT pg_catalog.setval('public.reviews_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: beigeh0ney
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: genres genres_genre_name_key; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_genre_name_key UNIQUE (genre_name);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (genre_id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: reviews reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--
