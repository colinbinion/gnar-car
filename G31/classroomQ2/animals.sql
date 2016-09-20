--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

--
-- Name: family; Type: TABLE; Schema: public; Owner: dannyfritz
--

CREATE TABLE family (
    id serial,
    name text,
    cool_factor integer
);

--
-- Name: species; Type: TABLE; Schema: public; Owner: dannyfritz
--

CREATE TABLE species (
    id serial,
    name text,
    family_id integer
);

--
-- Data for Name: family; Type: TABLE DATA; Schema: public; Owner: dannyfritz
--

INSERT INTO family (id, name, cool_factor) VALUES
(1, 'Corvidae', 10),
(2, 'Emberizidae', 8),
(3, 'Strigidae', 10);

--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: dannyfritz
--

INSERT INTO species (id, name, family_id) VALUES
(1, 'American Crow', 1),
(2, 'Dark Eyed Junco', 2),
(3, 'Magpie', 1),
(4, 'Spotted Towhee', 2),
(5, 'LBJ', NULL);

--
-- PostgreSQL database dump complete
--
