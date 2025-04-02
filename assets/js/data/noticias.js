/**
 * Base de datos de noticias
 * Estructura de datos principal para el contenido del sitio
 * @typedef {Object} Noticia
 * @property {number} id - Identificador único de la noticia
 * @property {string} titulo - Título de la noticia
 * @property {string} descripcion - Descripción o contenido de la noticia
 * @property {string} imagen - URL de la imagen asociada
 * @property {string} link - URL de la noticia completa
 * @property {string} fecha - Fecha de publicación (YYYY-MM-DD)
 * @property {string} categoria - Categoría de la noticia
 * @property {boolean} destacada - Indica si es una noticia destacada
 */

/**
 * Array de noticias del sitio
 * @type {Noticia[]}
 */
const noticias = [
    {
        id: 1,
        titulo: "Tres Nombres Comunes podcast",
        descripcion: "Bienvenidos a \"Motores en Acción\", el podcast donde desglosamos los secretos de los motores de bases de datos. ¡Prepárate para aprender y optimizar tus proyectos!...",
        imagen: "assets/images/noticia1.jpg",
        link: "https://www.youtube.com/watch?v=zdRo7oSyA00&list=LL",
        fecha: "2024-04-02",
        categoria: "Tecnología",
        destacada: true
    },
    {
        id: 2,
        titulo: "Tesla presenta a Optimus",
        descripcion: "El robot humanoide de Tesla, se convirtió en el protagonista del evento de presentación del Cybercab y promete revolucionar los servicios de asistencia empresarial y doméstica en todo el mundo....",
        imagen: "assets/images/imagen1.jpg",
        link: "https://es.wired.com/articulos/tesla-presenta-a-optimus-su-robot-humanoide-que-puede-hacer-cuanto-costara-y-que-tan-autonomo-es",
        fecha: "2024-04-01",
        categoria: "Tecnología",
        destacada: true
    },
    {
        id: 3,
        titulo: "Campeón chileno TCS CodeVita",
        descripcion: "El estudiante chileno Martín Andrighetti fue el ganador de la versión 2024 de TCS CodeVita, el mayor concurso de programación del mundo...",
        imagen: "assets/images/imagen3.jpg",
        link: "https://www.trendtic.cl/2024/03/chileno-gana-el-titulo-de-mejor-programador-del-mundo-en-tcs-codevita-2024/",
        fecha: "2024-03-30",
        categoria: "Educación",
        destacada: true
    },
    {
        id: 4,
        titulo: "¿Se adelanta o se atrasa el reloj por el cambio de hora en Chile?",
        descripcion: "Este fin de semana se realiza el primer cambio de hora en Chile, momento que marca el inicio del horario de invierno y determina el nuevo escenario en gran parte del territorio nacional.",
        imagen: "https://www.latercera.com/resizer/v2/MMYPUYV3ZZHOFAFGWLWMEU3BIQ.jpg?quality=80&smart=true&auth=ebf0f9a281e1f32e946fe7ed9c6b38d37f57eac7bc09a99ce53d93407e96fca6&width=690&height=502",
        categoria: "Cultura",
        fecha: "2025-03-31",
        link: "https://www.latercera.com/servicios/noticia/se-adelanta-o-se-atrasa-el-reloj-por-el-cambio-de-hora-en-chile/",
        destacada: false
      },
      {
        id: 5,
        titulo: "Noticiero",
        descripcion: "No hay noticiasndasnddwwadse",
        imagen: "https://images.pexels.com/photos/783737/pexels-photo-783737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoria: "Cultura",
        fecha: "2013-12-30",
        link: "https://www.pexels.com/es-es/foto/fotografia-en-escala-de-grises-de-la-persona-que-sostiene-la-pluma-783737/",
        destacada: true
    },
    {
        id: 6,
        titulo: "invente roman",
        descripcion: "roman invente",
        imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBoYFxcYGBcYGRgYFxoXGBcYGBgYHiggGholGxcXITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICUuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0wLS0rLS0tLS0vLTUtLS0tLS0uLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAD8QAAEDAgQDBQUGBAYCAwAAAAEAAhEDIQQSMUEFUWEGEyJxgTKRobHwFCNCYsHRUnLh8QckM1OCkkOiFXPC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EADgRAAIBAwIDBAkCBAcAAAAAAAABAgMRIQQxEkFRE2GBoQUiMnGxwdHh8JHxFCNC4gYVM1JiwtL/2gAMAwEAAhEDEQA/AMQ+R6IFeoZH1upbXW280PE0Lg20/VWQGxw3RGgZmn3f1TO6k23QcRQc1wupYhYVPNDOoUVuII1RRimkjZXYhaspyFExtA203RqdfNolinzEBSyKK+lTeHWMfFSxinCSYMcvrmuURe/JFbTBKli7gqeKGa83n5qRWg5YM3/ROoUAXaWuEWrgmAes2VO5AFWiYPKFXNokECCSSAPM2sraLEAza86D9lSDiju8loFgY5CbSZ/W0TNpQ3IaPh/AajiIAI3OcAAC5ubE2Ok+m2lwwp0mt8OvIiD/ACmAXeYDvNUGH+04hwyEikLS4e0f4nTobAjNb0gK/wAJg8Ox01a3ev3GdxnnOUhoNuvoqZVxtST7VEZDrmBiB+a1+hXeG4aiDDXOBN4FR2Wegc8AHyO8K+oUqB/06DS7kBP/AG0DSL6lcqBzRHcsF/wtLpjqSGzooEDOHZl8dMHmWTmGmuR3635JtThuFqDKGh5/hBAfG9nAOJ8gVJw2OaPC00xF8rokf9ZC5xKvQyjvKQnk0gE9RPtKyncwvaDs9kDnUTLGgktIhwiZkH1PoVkK7WEXY33Bb3jPERTAfSe4wfZqAl8E3AcZkep0CxHEqBaZiGkkt6dPSVcXyI0+ZHbwym4WEeRP9kI8Fucr99/6KThyYRu916pqqTWzBcUymxXDKjToD5f1XO5LbvY4eYt8FcVa2isG1g4QfJGtTJbguimZGqQd1zSyv8ZgaZ1aPkfgo9Tg4IBY4i29x+6dHVRvkW6D5FQ/RcLoU2rwiqLwCPykn4RKjYmgW2J5cxr5p6qRllMW4tYYqjgW9QgJ9N0W9ER9GNPcivcHYivcuOYiPpyuGmQhYaYEpIgckqsFc0QqKUG5WifacfcIt8So7H5BmIv+EfqgfaHEkm86rnGgnMeIjfZCc8ucOij947y+aPQdBB5fWyq5Ca7Bgj49VCxfDxaPip/23Sw+KYak7KrlkJr3sMfBHp8QEeIXR3PJ2F0F1IQ617eanEQPRqguJ6WRA66qq1JweXD3IxxxBu23MG/10U4iWLii+HD1/VFqun991W4WvmdIvH1opVTEnl1Q8RLEDtDiu5oQPxHL6an4LN4LFPdoYaLkgCZ2aCd/7myt+1ri6iDEZXD4gj9lQ4N+QEgm4jS14n4bqizVP49VLRTaSAAAANGjQmIAn0jpqrPhGMfbxuDYJmJmJvEARqY356xU9nabXR4S428pBnT3arXYbhL7QwNttbfbpACU6qvYdHTSauTKPGu5aJqOe53sssIbJI2uYj1tspIx76pipTLhs0QHAExGn1uq+jwWoCSGO84vE6CbD53V1w3hz2a+EnXcz9Xup2qDWnlyCVKZdLBTfTAuSGtn0tE6KoqPeYYyrUP/ANgDwd7icsythQwDcpL5fOs2HoP7qsx2ADZhoNrTryudbDRX2kQewmZfFQ4Dv3ty5iSAwAwGzEAA8xH9Fm+J4ynUY6m03DiRERANsvQj5rSdrcBNOpUDQD7RbNgIgny39V5zw3DkVnE3EGSOf0Y0CuLTygJxa3J+HmEVyM1giISawWjb3FN4hREr0yADEaqTSA9Pkm4oybpCraIg80LLQ6uLAhPY/wCQUZziV3vjaVCyVmKi8QwgqX0dzH7J3f8ARLvDEKJtO6I0nuZ7G0HU3XuOY0KksMgH6lWj6YIggHoVV4jDGlceyfgt1DUXdpGWtRxdA3PvB/qnZ9x6yitrt1LRf6lRnOF1ruZ7D5HL5JIIxLRaJ6pKcaL4GWlWoXGSmZbohallXJubxQi0zpr/AFTWC/RHLR+36hVcg8NHJGACbo0GJRGC31urRB1GB9fJKpHvTjTOqa5iliA6gQ8jSRaOqPlsh7hUywgwwHTqEW+4kcwnlpXc0bJdiFRxyjNEgfl+BVDw7Al7wDoD8StXi3gsd0BP6qHgKeVoLRd5sPSLoZSshlON2SeFdoqNGG06b3kTJA1PT4KxH+Ib2uE4UgdXmfdlVZj8M/LSp4YHK326sfdl3ICPEAZvcT5K64JwHE1Q5mKqCpQgkeEFwdDsuXMAWiYJILTAISkomz19sml4F23oVi1t2vdHhP7haM41gaXlth8fqy8p4vwBuHYKgOWoHAwHl2TaQYFp2N+pXp9ENfQa03Bvz2B21S+JDeBlRju29TMWUMMXj+Jzi2TpAAaeusaILu1OK/HgnAdAf1HVE43wyrIbReGggw4Rd0eEZRtPOfRZ/D4fiLGE14qEZQKcCS2+ZwqUwDTdpFzobbo021kBxSasaRuMbXaWmm9mYEEOaROxgkdV5z9iyOM6kDbSJn4/ovUsHSPdSc8wPbAzDoYtPULB8WoONdwaxztSYBNpI0HkpSeRepV0VzGhPQ3coSgwtJhG1mBRnBOq1CmlwO8GVCzgdHl8E0rruULgadNVCHA5PY3UzZMa2OqPbSFTZZxg8kyo2dRI5bJ7D1966D1hQhn8dTLDY2P1CBE6nzV5i6IcCD7+vNUVYFpg6rfRq8as9zNOHC8B24du5jouKO583STRdmaKqASnhu6gHiom7CDyEfqpFDGtI8TXCOi57pzXI1cSDEfXuRgyT9eaBSxDHfiAHUH9VKpVmE+FwMdRKF3RZKpU5HJSKFOLFRG1Rb4qXQd1UW5TClsKMWE6KW4A6poYJTGrApkIs1kIQbdWL496jOZF0uWAkKm7n9FNr1fC4jUNJHoE9r0nt+P6ob4CW5ja7yXS53iN83O+juYMLXcJptJpZgC0NBjYzCyGJgvI5AD1AAPxlaXhtXJRpu1DTB8tQky2sdCaXFdHpGCw7YyloLTfTSNvJTXYYR4QBFvLylVfB8VnDSLyFYcd4kcPh31A3O5os0AnxGAJjbdZlk0bbGU4w7va/wBn5+0eXIeZ+S2tCk5jG2sBpy+gvCK/aGp3jalzUDsziTq6ZPxXrmF7S4ithhUo4Zz/AGZDiGZo1yk+1qm9nbcqNVO6RqKdEPbcC/MCDCVPDAGIPvcfgTCjcKrvdRFTK5u+R3tAdRsVYtrCJCmLASunYi4iwUTB4UGm8CQHPOYtMOMxNxdoj1uj4urrN13C0hTa0jV7czh6QT5IVkiPMu0mHFPEVGC4BHXUA6/FVjipnGa+evVcdS9w9AYHwAUEvWlbHOnmTZEraoZ1TqhmZTCOXvTEAGY9PDdLiVHBP100RWH3qFnQLxz3RCIaChBnx0PJFm19h/ZCyDZv9FPJjcSmseBHv9Fx4kzzVEHOaCNb8+ar8fhs4t7Q+PMKwpDpv80WpTa3zVqbg7ojV1YyLxBhJXVXBNJJjVJbVqYiOykQqrZA8JDrW8lKwrxBD79OnJGwD2vcZvyVqygwXgHbyT2JRVvok+yP7IL+HEDr5K7bl2HoiEWlBZB3KGhhQ32m+ZE/uptJjNMxHq4KVUojUaoTmNgqsEuH+zSJa9x/5FNdQdu93o537qtqUuR8ii0H1Wn2pHv+ajt0L8QtSg//AHKg8nJV6ZAtUef+Sc7EvGrfdb5qAcdDjePO3VDwplXaH+MG73jncFFNR5sHutzj9kYQ4TaenJAqU4MhC4roEmyt4jhjJO5FzzO5UzgdWaD265XD3H6KIKgNngEFSsJQaGvDALgHrY7+8rLUpNJtGyFZSsnuabsJii4Fsw7M1jZO7pcT/wBWu+CLxntUynVNN5Iyj2YM8xJ6i/qs5wHH9zVvpnafIgn9CR6qy7R46j9oYalNjwCHAkXkQ4AkXynkbW6rFwq5vhLYnYLjWGec4ZTcZvIE/JafD8bogT7Lf4TaJ8zoucEx+FqgOOEoWeXyGM1cCDAI+oV7QZgwHBuEaIdmMU2azOtvqyOMFumNnNrDgyv4fxWm8wx4Pqp1Uaxb05rP47hNCvWYaVLuIcXOdTMF+a8OgbbBXlV2VsTJG56THzQSFzw1y7iDiHlxyjcgDzJhWGIxLKdOo8EHu2uLryZaJAM9YjzWT7U8YOGpB7I7wvAZNxa5t5BY7ivbfEVxlfka3cNaRO9yTOt06jQlON0ZauojB2AVXkm+pJJ6ndKiwbyhYXFMd+U9dPQqw7ndHJOOGZE0yHUw+qhFp+vNW8DRQq7QLD1UhIsAyDrPoE+pUiwHwEpP2Olv1hDqtnT1RkHUzJRiBeXCPeo4b7k++6jIdsZuFIpRlM87KOB1sUUsMe+IQsh1vTXnsuuBJO9r+qVMxffT05ps6n69VCwbmj+NqSaGH+H5rqhCFRdl9kQD6q2w1Uxp/TkqnBOgAfi+XJHw5d1F9Cuo2uRitYmmcxiANyjh86KE9p19/wDVS6QgQFHaxSeTr3RoVAfU8X6qSxriSIsgVaVyIt0QBAXuieXxXG4q4CHVo+0m06YF1GWixdiPcotfKYkBJzuaFvOyEuxLoYRseEwVyoHN1uuU3LrqyK6SyVkE4jkpGAfDp6H4IJAOhSpth0+enkUmpbhdhlP2kO4mwg5xcFR69KpUjODBgNcPgpFPFRY3adR05jqrfhFZrCA7xUnb7tJ2PK65t7HTSyE4NwDFsE069okeAGR6my1GBwOJtnrH0YB+qNwzGtYcs/Wy0GHrgjXVDl7j+0cVZMBhBkEann0QsW/mpOLxLWNJJA1vyVXhKhr+ODk/D+br/L8/nTATu7s8+/xAxTnV2MmwZLR/MSJ/9QswWSL2Wv7e4IuxQIIvTaIM65naWWRqtcHFrgQ4Egg6gjULp6acXBJM5eqhKM25LfYAKhGisMHxNzbSfI3Hu29FDyykWW+tFpajLDRmTa2L2nxNp9rwnnNv6eqPUbMHWdCCs2bXupVHGODZbaNoEH0SJaVbwGRrdS3a3nrdAc2/15qvHFHgXa2/KR+6K3iQ1LHeYyn3XSnQqLkNVSPUnilePrZOdBkbAfUqD/8AMU4EZgeo/ZF+2UiP9Rt/P4pbhLmglJEhrIbPWB+qa68Acv7pj8U10QR6EIjquw0v6hDZljskfJdFOfT3LtN7dLn4IobLRl539ELkXYZkH5vmkmimV1VZF2MvSrkOaTtqrtuJa6+Ui2vJUlVoB59FKwNcm3LbaF130MPeXlBsix3v+6kUmx1UHDGIvqrEDRAWELbWCjVmyTa6mhtkJ7Coy0VQbc2shuA1CmV6esKHkvCEsj1JSbsivbquNCp4LQ4jmmlysGcGrmIovk3AynNB3y6gfmMDqm4nBUaQ+/qQ7/bZ4qk7Dk3lf0KTKtG9r3fRZYxU5PIHBYJ9S7Rb+I2A/f0RWtymu20s8MxqZEny6e9XGEDGUKbm0zSa6q3M105ruytLpvchipcdTNPEVwdHkPHUO/Ygj0WB6lzk47LPka6VJRsykqVYKnYLFObofryUDFM8XRS8M2yPkNe5IHaAMMOp+rSW/CYVlgu1ryQyk2oXGwE5vkJKqqfCTiHQBHN0WH7+S9B7OdnqWHbLGy4i9R3tHoP4R5fFU3Gxai7ncDw2rUyvxbp5UQfCOr/4j0uPNapjYAnSFFo0rzKmAzZKbGpGX4/wFtfEUKpcQ6m9vh/jAcDlPr8yqPtRwJ+JxVXumjPToMc5sXqOc54idnZWiOcQvQKOHDqgOzfmZH6qj4BjW1KuMxpcG0JbTpuNgWUA4vfO7S55g9Fzp6mpTrSnDPBFLxlJY8VcurGM4qD5v4I8nqUSw5XtLHROVwLXX3LSAU2mR5hel4nh1aqw3w/EqF4gsp1WdGVGGBHUg7LMY/swM33OdjjpQrju6vlTcfBVH8p0Xeo+kKcsSsn3P4p2a8Ul3nJnppLbP5+j8GZiqS28a6cl3CvZMOt1HPl5Ir6bmPNN7S127XAgj0KDXIJPz+vJdGMuhlaD18JbNaJj69yEGiLSNUGpWuIJACk0qjXdCNdwf2Rp4yC0DFIEiRyBPO+yCMNJsQem6n90ZBjTQfW64/DAAuIvPnCppotMrn0DJ8B620TWgjQkeqsqVTuxJMl3wndCZh2nM6bD4nZDcK5Ha50auEfmOqk0sZUDT4zI5gH9JUbvII9589UYX0EkyT6GQlzgnuglJ9Se3iFU7s9x/dJVTargkl/w8eiD7RhcGQQ4GxA3XKYygAm+yh0qhBB3/RT6rJAdNjvt5LRJXyLWMFzhG5gC0Tz5jzCljEX5QqbBYruyHHQ6gXnqr8Ug6HTM6eSWE0JmLG5UhrgUIYIEaIZwLh7J9FaKCVaMqHVoclKoUK75DKeaBLiSAAObnEgADmVe0OEMFIveWZPxVamZtIWsKYkPrX5ZAdnHQpq14U93+fnIONOUtjMYPg76sus2m326jiAxvm42npMrTcI4axsOw+HqYh21Q/c0geYqvhzo/IADyULHdq6FMtFCiKxZZlSsIazl3VBoAYNbjKecqm4n2txlac1dzR/DT+7HlLYcR5koHpNZqNoqK/5Nryjnzj3oLtqNPnd933x8Ta47BvA/zuPp4Zh/8OHhhP8Ayd43dRlMqhxXHOHYcZcJhjUf/uvlsTuCfH6ANCxT37k668yUB9fkn0/QsUrVpuS/2x9SPio5fi2B/FSk7xVu95fma3hHEjixWoVoBcMzcoi1tNbtdlOu/REdSdXYWPtiaJg6Q4HRw/K8AHoQsZQxb6b21GmHNMg7eRG4K9NpYBuLw7MdhSXV6Yg0jAzAQalBxG8XaeoO9uV6S00dNUTjiEnjpGXf3M26eo5LO680YHGUtdiLEHYjX1UzhnC6uXO5pazrafIa+q9CfwjD16TMZhWgkiSDckCxBG1RunWPJCFLvG30Nxos9PUcaeLNYa5pmxRTKzgRa0ZQI6LUUKthCyv2Tu3dFdYerZHcOxd03BHfUAHU6fooGHNkLjXEPsrGkN7zE1TkoUhu7cnk0bm3mNUudThsllvZfnJc3yBk0skXtNi3w3A4c/5jEA5yP/FSNnvdGlpA03i8TF49x3D8PbSwjKIqsDPGxxAAbsTLSHOccziCPmpPg4Zh6uJruFXE1YL3b1KhHhpstZgjloCY0A8gxWNfVqOqvcS5xJceZPTYDQdAFfo3RQ1k25ZpxbztxzfNc7R5fuZdRWdNY9p+S+56HhcJw/EO7zCYl+CrH8M5b8g3MAdNGPjormph+J02llSnh8dS5HKx5HUOAb8HFeRtqqy4dxvE0LUq9RgH4Q4ln/Qy34Lq1/Q1SX+nNSS2VRXt7pq0l+rMcNUl7St7vpsbDHNwziKdVtTCnaliWudR691VBzUvNpa38p0VHxjsa6m3vKbhlNxLmuYeeXEABkdXinPVTMH2/rwWYmnSxLCIIc0NJ84aWn/qp/D+IYJ7v8tVqYGq4+yYdQefzMJLI2/Cszp6zTe1F2XT14/+14qQ3ipVefyf0+B57Vw7m1Mj2lrgbgtII02PRGfViQb3sNAPNb3iuApthmNoCjszEUcxoGTYFutKSdBAJubBZfjPZl9N2ZpzsLc4I8Ut3c1wAFRotLgARN2tBBOyhq4VWu/bo/c9vDdc0hFSjKCbRW4LEFsnrPP+yt6T2vBB+vLmqSY0U2g4gWXSUTG2cewtzXDhGyhuByC3hm/U9VbMaCCTZ+w2I5Ktcx2aYyjebCP1S2lcKLI2Hp5zEwOfJTqZykNa3kZ59UOkZsBAHPdTqDxZpBJOh6636KmGVtegA46alJWVfANJkvg2kdYCSGxLlEaWs7KfgqoINMiAbief9VHpmRzRsoSXIcoj6uFLSJEAKz4RiQ05ToTboTsgCsHMv7Qt58igsCG5LGpp1AFIwxD3G8ADM9xmGtGpgXOoAGpJA3VTg673ACL6SSALbzyiZ8loXVG4enUeWj7jI5wvFTFOH3NM820g4PI2c78lgq1uFWju9vh8WkFCF3d7DOKcUp4UZXMDqtnMoOu2nuypiSP9SroQzRlgI9o5DinFKuIfnrPLjsDo2dmt0b6KDWrue5znOLnOJLidSTclcBXV0mhp0PXeZ838l0Xm+dzHXryqO2y6CJ3Ngor6/L+qkOdPko1alyWyV2rgQstxF0phXGpyHcahN5FXfZTtJUwNQuYM9N3t0ycoJGjg6DlcOcaekUYT2pFfT068HTqK6YcakoO8Tf8ABO3lCjiKrzSqU6NaHuYMr8lfRz2xHhe2Cd5Giv8ABcQw1Zxdh6gcx1yILXMcdQ5rhIB1BiNY0XkUI2ExT6Tw+m7K4e4jkRuDyXLqehKXF2lNtO1t8O21/qaaetlHD2PXMXhDe3qmYdsawqnhvbOlUpxUIY8C4JserTuOhv8ANZ/jHao3FHfV52/lB+Z9ywR0NZz4OH6G96qmo8VzcVO0mFw5mvVAP4WAOe6+8NFh1MLM4Ltvhxiq2JrU6z3H7uiGtYRToj+Z4h7iSTy0m6wlRxcS5xJJuSbk+qYVv/yShK7m221Z5tju9/MwS1s28Fz207RnGVg8AtptGWmwxIBjM5wBIzE/ADkqEM2TwzcrjnLo0NPChTVOCslhGec3N3e4tFw1SmFda1OKsSab52unEIEpza1iTsrTtuKcehoOEdrcRQAZm7yjoaVQBzS3doJEtEaDTodFqG902l9owpc/Bl01qNw/DP1NWlN2lsyRpHNpt5q3SeauuyXHfstcOcT3T/DVbqC28HLuWkz7xuuNr9ApRdWirS3aWFL+7pLdPuNdCs0+Gbx16fbqi347whrCarYLfC4lohjm1P8ATrMjRjtC38LraOaqQxOtl6AzBCma2GjOKTTXoN1L8LVH39EeWo/MGnZYfjWANGoWWc0gOY8aPY8Sx48wffKLQV+0jwy35Pqvz5rkJ1NPhfEtiIyQ4mVIDw68uOx3b6qI2uAIgeZElFoU2kWfHMaaeS3TRnixsakG155gz8kKpUNg0evRS8ThW5TlNyIN5BnURsoTcOWiTzsPmkvi5Dk1zHPFRxn6tZJDqySYNlxElMG6I9JpU2mZQqVO0BGayAsUma0rD6Agg/UKzyNLRkgkC+t+t1WtRqDi0yPUKkyM0PZ1rabamKeJFJpIk+0RGVnQueWN5EZwo/bWqabaGFLpe0GtiOtet4jPUAmOjwtLgsAC/CYeLOea9TozD+y082ms8n16LznjeN77E1aoMh9Rzgfyk+H/ANYQaBKtquLlHPxiv+7/AECrepTt1/d/LzIrXIrj8igMNh5oh58l6K+TntHWJxCGTAXadSUafIFrmCc1KEaoFymyTAEkmABcknQAblC1YNO4INTsqlYzCPpOLKjHMeIJa4QRIBFvIhAIQxakrrKI21uMCULsLoV2KuNLU0ohCHCli0xpC6nQuOQl3GPKGFscBwWhQIOKIqPBbNFrhlp5pINR2YF5tdjDA/E7ZDd2ewtR3grVKMuLcjm0qwDhBIbUbVbLLwHOAB5lY3q4X2dutsfXxtYeqbsZCERgWxbwPBvptbTNRjyHPbWqRBa233jGSGMmQC0ucCCSCCFnOJYB9B5p1Gw4QbEEEHRzXCxaRoQmUq8aj4dn0f5+cwZxaVyCRK4+/hHqnuMeaG210yXQBDy/XkBH7oTHXCT/AGQOZCa27/VLbykGlg9RwvFvuMFjAb4eqMPWv/4z907NzOXIRO7pRe0PDAKVQAXwzg9lpnC1nGwO4ZUkeSpP8M8Q2q3FYR+lRudo6+y4+YPdkfyrRdnMU2pRwVSr7Ic7A4ls3yvhrMx6OFM+bivN0pSo6lx5Rk/0leS8+KPibqsVOlfqvhh/J+BjDVpQfCJ20QaNUDRu3RP4ngTRqvouu5jy2Zy6WBI6iD6qC+mRMj3EH3L0akmrnHcWiW/GjLEDmYUWs8E9Ao7q+Ww/sjCtTIjKQeYVcSuWouwMZRbVJAe69klMBZG0qk7o+HqEkhRWWEI+FEHqsElc1pk9jU91hPJOpiyZjXQzzQ0Y8UkgpuyubbDcYa+hjcY0FuTDU8PTzRLXFrpuOdR7fOAvMXmCiGqRmAJAdGYAmHAGRI3g3vugvdot2k0UdNKbi/aat3JJK3xfiBOo6iV+Q9psR1+vmnh2yjNeukrUp5FuBJNQHZLu9wlQaIUqhTLiGtBJJgNAJJJ0AAuT0WjldiG7OyGYam97gxrS5xMBrQSSeQAuV6J2NwDsDXYzE0mA4hv3VSznMeNaRdENLgRob+G5vAeE8DxPDmtxrwIkNrUmjM5tF8AuJH4g7Kco5XOoG145w5mLwxaCPEA+lUH4XRLHgi8X22JXi/TnpeMmqGHRneLmt0/th87o6mk0zXrf1LNjP/4k8A76l9oYPvKQ8XN1PU+rTLvLN0XlC9z7K8UdiKMVG5a9J3d1mxcPEiY5O15TIGi8x7cdn/smI8IilUl1O2l/Ez/jI9C3qr/w1rZ0pS9H1/aj7Peui+K7ia6kpJVY89zNAJFOhchexOYNJXCnwuQoQYuEWTyFxUQ9FfQ+0OqOL3MYaNLLDatQuGKZmAyMdYNex1gDJ1BixMNwp7m4eqXEfaKhP4zkL6Tg0lxcc2YMBn80Kn4BjXuwxDHOFWiAx0PdTz0S5zqeZwewBge97C4yWh7IjVHpcYePEK7gIacxN8jXwx5bndeSaQZrBzleblT1CvCEkrYs/dbzxLy6nSUoOza3/PsGq8NNJ1RjnSKVKlVkWztpBkgHuzDsz2xJMb5hpm+2dX/MNbuyjRY7+bu2vd8Xx6LU4bE1KhqNrPeKPidXBNm5MhqMByWyMaxhAIDy9pG4WB4pjXV61Ss7Wo8vjlJkN8gIHotWiVR1f5lm0uXV2+j8hNZxUccyE664Lldchh9102xCRyq7xjoh03anoUx7/ESkDbzWZTvJv3jeHBfdiMWKWNw7joX5D/zBYJ6S4H0W841hhSHFKBdlbUpMxlO8Q9rjng8zUa33heUMeWlpBgg5geRGhV5x3tBVxjnVauUQ3K1rRADcwtOpud/gufW0dSepjUi7Lhs/BqS+Y+NVRpuL3vjxVmWXabizMXX79rSC5jO8mL1A0ZiOmg9FSVDMxZDwLpa87tDT5icp+YTC9b4QjCKijFNtybGOeW6H3rgxHMeuibVC5lVPuCxYktxFtT7gUkAEpK7lWHqXhWykks09hsdywaonEHbJJItEv5vgXV9kr3aoLtPJJJdSQuJx1789fNDpO2SSWebtJDFsWNM2AUmhVLSHNJDgQQRqCDII6yEklvWVZmORocb2zxtUOa+v4HAtLRTpAEGxE5JuOqrqPGcQ1gpsxFZrAIDW1HtAHSCkks60lCCtGEUvcg1Vm92yM/FPkuzvzHU5jJ8zMlAcTuZK6kmKKWyJdjHBINSSVlMRbdIhJJQobC5CSShESOHY11F4qNgkAgtIlrmuEOY4btIsR+q2eCwj8SO9wsuBdcPe/MyrYODnF0GKGZoeAZbYjNCSS4/paXY0+2jvt713mvS+s+F7FBx7ibAw4fD/AOn4RUqRBqd3/psAgHu2bZvE43Kzrikkt1GmqcMc8vvYmcnKWSNVcgOdCSSVVdhkAQ1T9YCSSRT+Yxjn6+VkdtmHqP8A9NSSWlcxb5ErhIkub/Ex49wLh8WhR3AjdJJDLZC/6mNvzSM81xJLLuOA6pJJKEP/2Q==",
        categoria: "Cultura",
        fecha: "2025-04-02",
        link: "https://es.wikipedia.org/wiki/Carlos_Palacios_N%C3%BA%C3%B1ez",
        destacada: true
    }
];

/**
 * Validación de la estructura de las noticias
 * Asegura que todas las noticias cumplan con el formato requerido
 */
function validarNoticias() {
    const camposRequeridos = ['id', 'titulo', 'descripcion', 'imagen', 'link', 'fecha', 'categoria', 'destacada'];
    
    noticias.forEach(noticia => {
        camposRequeridos.forEach(campo => {
            if (!(campo in noticia)) {
                console.error(`Error: La noticia con ID ${noticia.id} no tiene el campo requerido "${campo}"`);
            }
        });

        // Validar tipos de datos
        if (typeof noticia.id !== 'number') console.error(`Error: ID debe ser número en noticia ${noticia.id}`);
        if (typeof noticia.titulo !== 'string') console.error(`Error: Título debe ser texto en noticia ${noticia.id}`);
        if (typeof noticia.descripcion !== 'string') console.error(`Error: Descripción debe ser texto en noticia ${noticia.id}`);
        if (typeof noticia.destacada !== 'boolean') console.error(`Error: Destacada debe ser booleano en noticia ${noticia.id}`);
        
        // Validar fecha
        if (!/^\d{4}-\d{2}-\d{2}$/.test(noticia.fecha)) {
            console.error(`Error: Formato de fecha inválido en noticia ${noticia.id}`);
        }
    });
}

// Ejecutar validación en desarrollo
if (process.env.NODE_ENV !== 'production') {
    validarNoticias();
}

/**
 * Exportar las noticias y tipos para uso en otros módulos
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        noticias,
        validarNoticias
    };
} 