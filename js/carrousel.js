function setREVStartSize(e) {
    try {
        e.c = jQuery(e.c);
        var i = jQuery(window).width(),
            t = 9999,
            r = 0,
            n = 0,
            l = 0,
            f = 0,
            s = 0,
            h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
            }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c) jQuery.each(c, function (e, i) {
                    u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
            height: f
        })
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
    
};



var eventos=[
    {
      "name":"Minsk",
      "anio":"2019",
      "dias":"76",
      "imagen":"https://kirmash.by/images/content/news/cosmo/april_2019/2_igri_july.jpg"
    },
    {
      "name":"Baku",
      "anio":"2019",
      "dias":"114",
      "imagen":"https://eyofbaku2019.com/images/baku-2019-european-youth-olympic-festival.jpg"
    },
    {
      "name":"Tokio",
      "anio":"2019",
      "dias":"482",
      "imagen":"http://www.telam.com.ar/advf/imagenes/2018/10/5bbe1890a2bf8_1004x565.jpg"
    }
    ,
            {
              "name":"Pyeongchang",
              "anio":"2018",
              "dias":"500",
              "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/PyeongChang_2018_Winter_Olympics.svg/1200px-PyeongChang_2018_Winter_Olympics.svg.png"
    }

  ];


var slidedata = [{
        "logo": "tema/img/atletismofederacion.png",
        "medialibrary": "https://cdn1.celebritax.com/sites/default/files/styles/watermark_100/public/1531060901-atleta-espanola-maria-vicente-hija-cubano-camino-convertirse-leyenda.jpg",
        "medialibrary_title": "María Vicente pulveriza <br>el récord de España",
        "medialibrary_entry": "La atleta española culmina su triunfo en los 800 metros <br>y logra el récord de España absoluto de heptatlón superando por primera vez <br>los 6.000 puntos en el Europeo de Atletismo Sub 20",
        "rrss": [{
                "type": "instagram",
                "url": "https://www.instagram.com/rafaelnadal/"
            },
            {
                "type": "facebook",
                "url": "https://www.facebook.com/Nadal/"
            },
            {
                "type": "twitter",
                "url": "https://twitter.com/RafaelNadal"
            },
            {
                "type": "youtube",
                "url": "https://www.youtube.com/channel/UCWn3uB0qhXSfcYlUWUYuSQg"
            },


        ]

    },
    {
        "logo": "tema/img/logo_rem1.png",
        "medialibrary": "https://www.coe.es/2012/homefederaciones.nsf/0/D629B61AA3859EBCC125843D0058B1E1/$File/portadavela.jpg?OpenElement",
        "medialibrary_title": "España, campeona por países <br>en el mundial de vela juvenil",
        "medialibrary_entry": "Neus Ballester y Andrea Perelló, en 420, y Ana Moncada, en Laser Radial, <br>han ganado la medalla de plata en sus respectivas categorías</div>",
        "rrss": [{
                "type": "instagram",
                "url": "https://www.instagram.com/rafaelnadal/"
            },
            {
                "type": "facebook",
                "url": "https://www.facebook.com/Nadal/"
            },
            {
                "type": "twitter",
                "url": "https://twitter.com/RafaelNadal"
            },
            {
                "type": "youtube",
                "url": "https://www.youtube.com/channel/UCWn3uB0qhXSfcYlUWUYuSQg"
            },
            


        ]

    },
    {
        "logo": "tema/img/COE_logo.png",
        "medialibrary": "https://www.estudiosolimpicos.es/images/Noticias/Aprendiendo/Sede_COE.jpg",
        "medialibrary_title": "Comité Olímpico Español",
        "medialibrary_entry": "El Comité Olímpico Español es una asociación privada, que se rige por sus <br>propios estatutos y reglamentos, de acuerdo con los principios y normas del Comité Olímpico Internacional, <br>que es la entidad de tutela y control de sus actividades.",
        "rrss": [{
                "type": "instagram",
                "url": "https://www.instagram.com/rafaelnadal/"
            },
            {
                "type": "facebook",
                "url": "https://www.facebook.com/Nadal/"
            },
            {
                "type": "twitter",
                "url": "https://twitter.com/RafaelNadal"
            },
            {
                "type": "youtube",
                "url": "https://www.youtube.com/channel/UCWn3uB0qhXSfcYlUWUYuSQg"
            },


        ]

    },
    {
        "logo": "assets/img/halterofilia.png",
        "medialibrary": "https://www.youtube.com/embed/c-jHtwDjlAk?ver=1",
        "medialibrary_title": "Historia de Lydia Valentín <br>Persigue tu Sueño, Supera los Obstáculos",
        "medialibrary_entry": '"Cuando llegó mi momento, supe que era mi oportunidad<br>para demostrar lo que era capaz de hacer"<br>',
        "rrss": [{
                "type": "instagram",
                "url": "https://www.instagram.com/rafaelnadal/"
            },
            {
                "type": "facebook",
                "url": "https://www.facebook.com/Nadal/"
            },
            {
                "type": "twitter",
                "url": "https://twitter.com/RafaelNadal"
            },
            {
                "type": "youtube",
                "url": "https://www.youtube.com/channel/UCWn3uB0qhXSfcYlUWUYuSQg"
            },


        ]

    },
    {
        "logo": "assets/img/tokio_logo.png",
        "medialibrary": "https://www.coe.es/WEB/EVENTOSHOME.nsf/(dbcolumnvfotosportadaeventos2012)/C1CCA015A1191CA1C1257BFA0034763C/$FILE/tokio.jpg",
        "medialibrary_title": "Camino a Tokio 2020",
        "medialibrary_entry": "Los Juegos Olímpicos de Tokio 2020, <br>oficialmente conocidos como los Juegos de la XXXII Olimpiada, <br>tendrán lugar entre el 24 de julio al 9 de agosto de 2020 en Tokio, Japón",
        "rrss": [{
                "type": "instagram",
                "url": "https://www.instagram.com/rafaelnadal/"
            },
            {
                "type": "facebook",
                "url": "https://www.facebook.com/Nadal/"
            },
            {
                "type": "twitter",
                "url": "https://twitter.com/RafaelNadal"
            },
            {
                "type": "youtube",
                "url": "https://www.youtube.com/channel/UCWn3uB0qhXSfcYlUWUYuSQg"
            },


        ]

    },

];

let noticeData = [{
        'title': ' El Comité Olímpico Español (COE) se suma a la campaña #aliadosdelosODS ',
        'entry': 'El objetivo de la campaña #aliadosdelosODS es actuar como altavoz para conseguir un efecto multiplicador y que se conozca y trabaje la Agenda 2030. · La gestión corporativa basada en los ODS crea nuevas oportunidades de negocio, mejora la relación con los grupos de interés y promueve la innovació...',
        'date': '25/09/2019 09:37',
        'medialibrary': 'https://www.coe.es/WEB/Noticias.nsf/8c53071b9bd133d2c1257a2400487c1f/f463840494a0bb46c12584800029e50c/RTcuerpoNoticia/0.EC?OpenElement&FieldElemFormat=jpg',
        'Categories': [{
                'id': 'idcategoria1',
                'name': 'Novedades'
            },
            {
                'id': 'idcategoria2',
                'name': 'Olimpismo'
            }
        ]
    },
    {
        'title': ' La familia olímpica brinda con el embajador japonés por el éxito de Tokio2020',
        'entry': 'El presidente del Comité Olímpico Español, Alejandro Blanco y la secretaria general, Victoria Cabezas, asistieron al acto de los Juegos Olímpicos de Tokio 2020, organizado por la Embajada de Japón en Madrid. La familia olímpica española brindó con el embajador japonés en España, Masashi Mizukami, p...',
        'date': '20/09/2019 10:57',
        'medialibrary': 'https://www.coe.es/WEB/Noticias.nsf/8c53071b9bd133d2c1257a2400487c1f/644c9022899f021ac125847b00313a82/RTcuerpoNoticia/16.472E?OpenElement&FieldElemFormat=jpg',
        'Categories': [{
                'id': 'idcategoria1',
                'name': 'Novedades'
            },
            {
                'id': 'idcategoria2',
                'name': 'Olimpismo'
            }
        ]
    },
    {
        'title': '	Presentado en el COE "Regresar a Maratón"',
        'entry': 'La sede del Comité Olímpico Español se ha convertido hoy jueves, 19 de octubre, en el epicentro donde se ha presentado el libro Regresar a Maratón, con la asistencia del presidente de la institución olímpica, Alejandro Blanco. Miguel Calvo, corredor y autor del mismo, no ha estado sólo en esta aven...',
        'date': '19/09/2019 15:32',
        'medialibrary': 'https://www.coe.es/WEB/Noticias.nsf/8c53071b9bd133d2c1257a2400487c1f/7531447d62fe59e3c125847a004a631a/RTcuerpoNoticia/0.84?OpenElement&FieldElemFormat=jpg',
        'Categories': [{
                'id': 'idcategoria1',
                'name': 'Novedades'
            },
            {
                'id': 'idcategoria2',
                'name': 'Olimpismo'
            }
        ]
    },
    {
        'title': 'Alejandro Blanco y Juan Antonio Samaranch piden unidad política para la candidatura Pirineos - Barcelona 2030',
        'entry': 'El presidente del Comité Olímpico Español, Alejandro Blanco, se ha desplazado a Barcelona para participar en el acto de apoyo a la Candidatura Pirineos- Barcelona 2030, organizada en el Auditorio del F.C. Barcelona. El acto, organizado por la Asociación Sport Cultura Barcelona, ha contado también c... ',
        'date': '19/09/2019 12:32',
        'medialibrary': 'https://www.coe.es/WEB/Noticias.nsf/2012NoticiasPOREventosWebdate/9D63904A768B9D5AC125847A0039E09C/$FILE/WhatsApp+Image+2019-09-19+at+09.48.34.jpeg',
        'Categories': [{
                'id': 'idcategoria1',
                'name': 'Novedades'
            },
            {
                'id': 'idcategoria2',
                'name': 'Olimpismo'
            }
        ]
    },
    {
        'title': ' Presentadas las mascotas de Pekín 2022',
        'entry': 'El Palacio de Hockey sobre Hielo Shougang de Pekín fue el escenario elegido por el Comité Organizador de los Juegos Olímpicos de invierno de Pekín 2022 para presentar a las mascotas olímpicas y paralímpicas. Se trata de un panda gigante animado llamado "Bing Dwen Dwen" y una linterna roja bebé co...',
        'date': '18/09/2019 10:31',
        'medialibrary': 'https://www.coe.es/WEB/Noticias.nsf/8c53071b9bd133d2c1257a2400487c1f/9d63904a768b9d5ac125847a0039e09c/RTcuerpoNoticia/0.84?OpenElement&FieldElemFormat=jpg',
        'Categories': [{
                'id': 'idcategoria1',
                'name': 'Novedades'
            },
            {
                'id': 'idcategoria2',
                'name': 'Olimpismo'
            }
        ]
    },
    {
        'title': ' Examen de acceso a la Universidad para deportistas mayores de 25 años',
        'entry': 'El Comité Olímpico Español vuelve a mostrar su firme compromiso de colaborar en el desarrollo integral de los deportistas, tanto en su vertiente formativa como socio-laboral, acogiendo el examen de acceso a la universidad para deportistas mayores de 25 años. Como en años anteriores, el COE organiza...',
        'date': '19/09/2019 10:46',
        'medialibrary': 'https://www.coe.es/WEB/Noticias.nsf/60d796c27c18b01dc1257a87003f90e0/735bce6b616fe0a8c125847a00303ef6/RTcuerpoNoticia/0.84?OpenElement&FieldElemFormat=jpg',
        'Categories': [{
                'id': 'idcategoria1',
                'name': 'Novedades'
            },
            {
                'id': 'idcategoria2',
                'name': 'Olimpismo'
            }
        ]
    }
];

let fototecaData = [{
    'data':[
        {
        'type': 'imagen',
        'elements': [
            {
                'id': '0001',
                'name': 'Carolina Marin',
                'url': 'https://pbs.twimg.com/card_img/1179793558469038080/2zE1vHCj?format=jpg&name=600x314',
                'entry': 'Carolina Marin Regresa a las canchas',
                'Categories': [{    
                        'id': 'idcategoria1',
                        'name': 'Novedades'
                                }, {
                        'id': 'idcategoria2',
                        'name': 'badmington'
                                    }]
                }, {
                'id': '0002',
                'name': 'Celebrando el triunfo',
                'url': 'https://ep01.epimg.net/deportes/imagenes/2019/09/15/actualidad/1568545248_639190_1568558691_noticia_normal.jpg',
                'entry': 'España ganadora del mundial de Baloncesto 2019',
                'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Novedades'
                                }, {
                        'id': 'idcategoria2',
                        'name': 'Baloncesto'
                                    }]
                }, {
                'id': '0003',
                'name': 'Ana peleteiro campeona de Europa',
                'url': 'https://www.mundodeportivo.com/r/GODO/MD/p6/Polideportivo/Imagenes/2019/03/03/Recortada/_20190303121026913-kFRD-U46803950399F9E-980x554@MundoDeportivo-Web.jpg',
                'entry': 'Campeona de Europa en salto triple',
                'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Novedades'
                    }, {
                        'id': 'idcategoria2',
                        'name': 'Atletismo'
                    }]
            }, {
                'id': '0004',
                'name': 'David LLorente logra la plata',
                'url': 'https://rfep.es/wp-content/uploads/2019/09/PERE0916.jpg',
                'entry': 'David Llorente lofra la medalla de plata en el mundial de piragüismo 2019',
                'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Novedades'
                    }, {
                        'id': 'idcategoria2',
                        'name': 'Piragüismo'
                    }]
                }, {
                'id': '0005',
                'name': 'Rafa Nadal',
                'url': 'https://okdiario.com/img/2019/09/21/nadal-durante-su-primer-partido-en-la-laver-cup-2019-getty-655x368.jpg',
                'entry': 'Medallista de oro en los Juegos Olímpicos de Rio 2016',
                'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Novedades'
                    }, {
                        'id': 'idcategoria2',
                        'name': 'tenis'
                    }]
                }]
            }
            ,
        {
        'type': 'video',
        'elements': [
            {
                'id': '0001',
                'name': 'Alicia Cebrián: "Estoy muy contenta con la plata y, sobre todo, con mi rendimiento"',
                'url': "https://www.youtube.com/embed/t52X8FqfIWE",
                'entry': 'Declaraciones de Alicia Cebrián tras su medalla de plata en los JJMM de Mersin 2013',
                'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Novedades'
                 }, {
                        'id': 'idcategoria2',
                        'name': 'Vela'
                    }]
            }, {
                'id': '0002',
                'name': '25 años de la plata olímpica de Carolina Pascual en Barcelona "92"',
                'url': "https://www.youtube.com/embed/vkzEuu9iihg",
                'entry': 'Hace 25 años vibramos al ver a Carolina Pascual convertirse en subcampeona olímpica. Revivimos este inolvidable momento del deporte español.',
                'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Olimpismo'
                }, {
                        'id': 'idcategoria2',
                        'name': 'Gimnasia'
                    }]
            },{
                    'id': '0003',
                    'name': 'Alejandra Quereda y la selección de gimnasia rítmica, a por el billete para Río',
                    'url':"https://www.youtube.com/embed/usSvd1ioVnE",
                    'entry': 'La integrante de la selección de gimnasia rítmica Alejandra Quereda nos cuenta cómo vive nuestro combinado el Mundial de Stuttgart en el que confían en lograr el pasaporte para los Juegos Olímpicos de 2016.',
                    'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Olimpismo'
                }, {
                        'id': 'idcategoria2',
                        'name': 'Gimnasia'
                    }]
            },{
                    'id': '0004',
                    'name': 'Carolina Rodríguez: "Ha merecido la pena el trabajo de mi equipo"',
                    'url': 'https://www.youtube.com/embed/46dSNkvujU4',
                    'entry': 'La gimnasta Carolina Rodríguez admite que se está sorprendiendo a sí misma por conseguir los éxitos que está logrando.',
                    'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Olimpismo'
                }, {
                        'id': 'idcategoria2',
                        'name': 'Gimnasia'
                    }]
            }, {
                    'id': '0005',
                    'name': 'Carolina Rodríguez: "En el futuro quiero ser Policía Nacional"',
                    'url': "https://www.youtube.com/embed/N6bcmppdmww",
                    'entry': 'Carolina nos cuenta su experiencia en el Mundial de Kiev y sus planes de futuro',
                    'Categories': [{
                        'id': 'idcategoria1',
                        'name': 'Olimpismo'
                }, {
                        'id': 'idcategoria2',
                        'name': 'Gimnasia'
            }]
        }]
    }]
}]



    
    
    // <------------ plugin Deportista ------------->

let athletes = {
    "data": [
        {
            "id_athlete": "deportista001",
            "name": "Ana",
            "surnames": "Gayan",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Gimnasia",
            "id_sport": "deporte001",
            "sport": "Gimnasia Ritmica",
            "small_photo": "../../assets/img/ana_gayan.jpg",
            "large_photo": "https://www.proyectofer.es/wp-content/uploads/2019/05/Proyecto-FER-AnaGayan_1140x664.jpg",
            "entry": "Es una gimnasta rítmica española, componente de la selección nacional de gimnasia rítmica de España en modalidad de conjuntos, de la que es capitana.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "tenis" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista002",
            "name": "Alejandro",
            "surnames": "Martinez",
            "id_federation": "federacion002",
            "Federation": "Real Federación Española de Ciclismo",
            "id_sport": "deporte002",
            "sport": "Ciclismo",
            "small_photo": "../../assets/img/Alejandro_martinez.jpg",
            "large_photo": "https://static1.lasprovincias.es/www/multimedia/201712/15/media/cortadas/119602115--624x414.jpg",
            "entry": "blblkjblkjblkjblkb lblkjblkjb blkjblkblkjbljklj kjblkblkjblkjblkjbkj lkjblcbsabaslkcbjalkjbc kbclakjbalckjblakdblkdajbkjcabd",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "natación" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista003",
            "name": "Ruth",
            "surnames": "Beitia",
            "id_federation": "federacion001",
            "federation": "Real Federacion Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Salto de Altura",
            "small_photo": "../../assets/img/Ruth_beitia.jpg",
            "large_photo": "http://img2.rtve.es/v/3656009?w=1600&preview=1467922653039.jpg",
            "entry": "Es una deportista española que compitió en atletismo en la especialidad de salto de altura.​ Es la única atleta española con dos medallas olímpicas, y la primera que obtuvo un oro olímpico.",
            "Categories": [
                { "id": "idcategoria1", "name": "Rio 2016" },
                { "id": "idcategoria2", "name": "Salto de Altura" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista004",
            "name": "Nestor",
            "surnames": "Abbad",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Gimnasia",
            "id_sport": "deporte001",
            "sport": "Gimnasia",
            "small_photo": "../../assets/img/nestor_alcoyano.jpg",
            "large_photo": "https://www.mundodeportivo.com/r/GODO/MD/p5/Polideportivo/Imagenes/2018/08/11/Recortada/1015034010_20180811171406461-kUnE-U451294668621OrE-980x554@MundoDeportivo-Web.jpg",
            "entry": "Es un gimnasta artístico masculino español y parte del equipo nacional. Participó en todas las ediciones de los campeonatos del mundo desde su debut en 2013, y se clasificó para los Juegos Olímpicos de 2016.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Gimnasia" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista005",
            "name": "Miguel",
            "surnames": "Alvariño",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Tiro con Arco",
            "small_photo": "../../assets/img/miguel.jpg",
            "large_photo": "https://i.ytimg.com/vi/YwmhWAihRN4/maxresdefault.jpg",
            "entry": "Es un atleta de España que compite en tiro con arco recurvo. Él se destacó como el ganador de la competencia de tiro con arco individual masculino en los Juegos Europeos inaugurales. En el mismo evento, formó parte del equipo español que ganó una medalla de plata en la competencia por equipos.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Tiro con Arco" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista006",
            "name": "Fatima",
            "surnames": "Diame",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Salto de Longitud,Salto Triple",
            "small_photo": "../../assets/img/fatima_diame.jpg",
            "large_photo": "https://i.eurosport.com/2019/03/02/2535021-52599135-2560-1440.jpg?w=1050",
            "entry": "Es una atleta española especializada en salto de longitud y triple salto. Ganó una medalla de bronce en la categoría de salto de longitud en el Campeonato Europeo Juvenil de Atletismo en 2015. En 2018 obtuvo dos medallas de bronce en los Juegos Mediterráneos de 2018 celebrados en Tarragona, en las categorías de triple salto y salto de longitud.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Atletismo" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista007",
            "name": "Ana",
            "surnames": "Gayan",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Gimnasia",
            "id_sport": "deporte001",
            "sport": "Gimnasia Ritmica",
            "small_photo": "../../assets/img/ana_gayan.jpg",
            "large_photo": "https://www.proyectofer.es/wp-content/uploads/2019/05/Proyecto-FER-AnaGayan_1140x664.jpg",
            "entry": "Es una gimnasta rítmica española, componente de la selección nacional de gimnasia rítmica de España en modalidad de conjuntos, de la que es capitana.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "tenis" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista008",
            "name": "Alejandro",
            "surnames": "Martinez",
            "id_federation": "federacion002",
            "Federation": "Real Federación Española de Ciclismo",
            "id_sport": "deporte002",
            "sport": "Ciclismo",
            "small_photo": "../../assets/img/Alejandro_martinez.jpg",
            "large_photo": "https://static1.lasprovincias.es/www/multimedia/201712/15/media/cortadas/119602115--624x414.jpg",
            "entry": "blblkjblkjblkjblkb lblkjblkjb blkjblkblkjbljklj kjblkblkjblkjblkjbkj lkjblcbsabaslkcbjalkjbc kbclakjbalckjblakdblkdajbkjcabd",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "natación" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista009",
            "name": "Ruth",
            "surnames": "Beitia",
            "id_federation": "federacion001",
            "federation": "Real Federacion Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Salto de Altura",
            "small_photo": "../../assets/img/Ruth_beitia.jpg",
            "large_photo": "http://img2.rtve.es/v/3656009?w=1600&preview=1467922653039.jpg",
            "entry": "Es una deportista española que compitió en atletismo en la especialidad de salto de altura.​ Es la única atleta española con dos medallas olímpicas, y la primera que obtuvo un oro olímpico.",
            "Categories": [
                { "id": "idcategoria1", "name": "Rio 2016" },
                { "id": "idcategoria2", "name": "Salto de Altura" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista010",
            "name": "Nestor",
            "surnames": "Abbad",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Gimnasia",
            "id_sport": "deporte001",
            "sport": "Gimnasia",
            "small_photo": "../../assets/img/nestor_alcoyano.jpg",
            "large_photo": "https://www.mundodeportivo.com/r/GODO/MD/p5/Polideportivo/Imagenes/2018/08/11/Recortada/1015034010_20180811171406461-kUnE-U451294668621OrE-980x554@MundoDeportivo-Web.jpg",
            "entry": "Es un gimnasta artístico masculino español y parte del equipo nacional. Participó en todas las ediciones de los campeonatos del mundo desde su debut en 2013, y se clasificó para los Juegos Olímpicos de 2016.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Gimnasia" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista011",
            "name": "Miguel",
            "surnames": "Alvariño",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Tiro con Arco",
            "small_photo": "../../assets/img/miguel.jpg",
            "large_photo": "https://i.ytimg.com/vi/YwmhWAihRN4/maxresdefault.jpg",
            "entry": "Es un atleta de España que compite en tiro con arco recurvo. Él se destacó como el ganador de la competencia de tiro con arco individual masculino en los Juegos Europeos inaugurales. En el mismo evento, formó parte del equipo español que ganó una medalla de plata en la competencia por equipos.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Tiro con Arco" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista012",
            "name": "Fatima",
            "surnames": "Diame",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Salto de Longitud,Salto Triple",
            "small_photo": "../../assets/img/fatima_diame.jpg",
            "large_photo": "https://i.eurosport.com/2019/03/02/2535021-52599135-2560-1440.jpg?w=1050",
            "entry": "Es una atleta española especializada en salto de longitud y triple salto. Ganó una medalla de bronce en la categoría de salto de longitud en el Campeonato Europeo Juvenil de Atletismo en 2015. En 2018 obtuvo dos medallas de bronce en los Juegos Mediterráneos de 2018 celebrados en Tarragona, en las categorías de triple salto y salto de longitud.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Atletismo" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista013",
            "name": "Ana",
            "surnames": "Gayan",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Gimnasia",
            "id_sport": "deporte001",
            "sport": "Gimnasia Ritmica",
            "small_photo": "../../assets/img/ana_gayan.jpg",
            "large_photo": "https://www.proyectofer.es/wp-content/uploads/2019/05/Proyecto-FER-AnaGayan_1140x664.jpg",
            "entry": "Es una gimnasta rítmica española, componente de la selección nacional de gimnasia rítmica de España en modalidad de conjuntos, de la que es capitana.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "tenis" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista014",
            "name": "Alejandro",
            "surnames": "Martinez",
            "id_federation": "federacion002",
            "Federation": "Real Federación Española de Ciclismo",
            "id_sport": "deporte002",
            "sport": "Ciclismo",
            "small_photo": "../../assets/img/Alejandro_martinez.jpg",
            "large_photo": "https://static1.lasprovincias.es/www/multimedia/201712/15/media/cortadas/119602115--624x414.jpg",
            "entry": "blblkjblkjblkjblkb lblkjblkjb blkjblkblkjbljklj kjblkblkjblkjblkjbkj lkjblcbsabaslkcbjalkjbc kbclakjbalckjblakdblkdajbkjcabd",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "natación" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista015",
            "name": "Ruth",
            "surnames": "Beitia",
            "id_federation": "federacion001",
            "federation": "Real Federacion Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Salto de Altura",
            "small_photo": "../../assets/img/Ruth_beitia.jpg",
            "large_photo": "http://img2.rtve.es/v/3656009?w=1600&preview=1467922653039.jpg",
            "entry": "Es una deportista española que compitió en atletismo en la especialidad de salto de altura.​ Es la única atleta española con dos medallas olímpicas, y la primera que obtuvo un oro olímpico.",
            "Categories": [
                { "id": "idcategoria1", "name": "Rio 2016" },
                { "id": "idcategoria2", "name": "Salto de Altura" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista016",
            "name": "Nestor",
            "surnames": "Abbad",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Gimnasia",
            "id_sport": "deporte001",
            "sport": "Gimnasia",
            "small_photo": "../../assets/img/nestor_alcoyano.jpg",
            "large_photo": "https://www.mundodeportivo.com/r/GODO/MD/p5/Polideportivo/Imagenes/2018/08/11/Recortada/1015034010_20180811171406461-kUnE-U451294668621OrE-980x554@MundoDeportivo-Web.jpg",
            "entry": "Es un gimnasta artístico masculino español y parte del equipo nacional. Participó en todas las ediciones de los campeonatos del mundo desde su debut en 2013, y se clasificó para los Juegos Olímpicos de 2016.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Gimnasia" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista017",
            "name": "Miguel",
            "surnames": "Alvariño",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Tiro con Arco",
            "small_photo": "../../assets/img/miguel.jpg",
            "large_photo": "https://i.ytimg.com/vi/YwmhWAihRN4/maxresdefault.jpg",
            "entry": "Es un atleta de España que compite en tiro con arco recurvo. Él se destacó como el ganador de la competencia de tiro con arco individual masculino en los Juegos Europeos inaugurales. En el mismo evento, formó parte del equipo español que ganó una medalla de plata en la competencia por equipos.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Tiro con Arco" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        },
        {
            "id_athlete": "deportista018",
            "name": "Fatima",
            "surnames": "Diame",
            "id_federation": "federacion001",
            "federation": "Real Federación Española de Atletismo",
            "id_sport": "deporte001",
            "sport": "Salto de Longitud,Salto Triple",
            "small_photo": "../../assets/img/fatima_diame.jpg",
            "large_photo": "https://i.eurosport.com/2019/03/02/2535021-52599135-2560-1440.jpg?w=1050",
            "entry": "Es una atleta española especializada en salto de longitud y triple salto. Ganó una medalla de bronce en la categoría de salto de longitud en el Campeonato Europeo Juvenil de Atletismo en 2015. En 2018 obtuvo dos medallas de bronce en los Juegos Mediterráneos de 2018 celebrados en Tarragona, en las categorías de triple salto y salto de longitud.",
            "Categories": [
                { "id": "idcategoria1", "name": "Londres 2012" },
                { "id": "idcategoria2", "name": "Atletismo" }
            ],
            "social_media":{
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com"
            }
        }
    ]


}

// <------- inicio slider deportista -------->



function mapAthletes (obj) {



obj.map( function (athletesItem, i) {

    let athletesList = document.createElement('li');

       
        athletesList.setAttribute("data-slotamount", "1");
        athletesList.setAttribute("class", "tp-resizeme ");
        // fototecaList.setAttribute("class", " tp-simpleresponsive tp-revslider-slidesli active-revslide");
        athletesList.setAttribute("data-hideafterloop", "0");
        athletesList.setAttribute("data-index", "rs-" + i);
        athletesList.setAttribute("data-hideslideonmobile", "off");
        athletesList.setAttribute("data-easein", "default");
        athletesList.setAttribute("data-easeout", "default");
        athletesList.setAttribute("data-masterspeed", "300");
        athletesList.setAttribute("data-thumb", athletesItem.url);
        athletesList.setAttribute("data-delay", "9000000000000000000");
        athletesList.setAttribute("data-rotate", "0");
        athletesList.setAttribute("data-saveperformance", "off");
        athletesList.setAttribute("data-title", "Slide");
        athletesList.setAttribute("data-width", "auto");
        athletesList.style.cssText = "height: 320px; transform: inherit;";
        

        athletesList.setAttribute("data-active", "true");
        athletesList.setAttribute("id", "fotoVisualization");
        athletesList.setAttribute("data-param3", "");
        athletesList.setAttribute("data-param4", "");
        athletesList.setAttribute("data-param5", "");
        athletesList.setAttribute("data-param6", "");
        athletesList.setAttribute("data-param7", "");
        athletesList.setAttribute("data-param8", "");
        athletesList.setAttribute("data-param9", "");
        athletesList.setAttribute("data-param10", "");
        athletesList.setAttribute("data-description", "");

        let athletesDiv = document.createElement('div');
        athletesDiv.setAttribute("class","deportista_div");
        athletesDiv.style.cssText = "width: 230px; height:320px; background-color: #ffffff;text-overflow: ellipsis;";

        let athletesDivImg= document.createElement("div");
        athletesDivImg.setAttribute("class", "center-block-custom")
        let athletesImg= document.createElement('img');
      
    
       
        
        athletesImg.setAttribute("src", athletesItem.small_photo);
        athletesImg.setAttribute("alt", athletesItem.name);
        athletesImg.setAttribute("title", athletesItem.name);
        athletesImg.setAttribute("data-bgposition", "center center");
        athletesImg.setAttribute("data-bgfit", "cover");
        athletesImg.setAttribute("data-bgrepeat", "no-repeat");
        athletesImg.setAttribute("class", "img-circle rev-slidebg");
        athletesImg.setAttribute("allowfullscreen", "");
        athletesImg.style.cssText = "width: 80%; border-width: 1px; border-radius: 50%";


        let infoDivAthletes= document.createElement("div");
        infoDivAthletes.setAttribute("class","infoDivAthletes")

        let infoAthletes = document.createElement('p');
        let titleAthletes = document.createElement('h3');
        let dateAthletes = document.createElement("p");
        dateAthletes.innerHTML= "";
        dateAthletes.setAttribute("class","dateAthletes");

 
        let athleteFederation= document.createElement("span");
        athleteFederation.innerHTML= athletesItem.federation;
        athleteFederation.setAttribute("class","athleteFederation");
        dateAthletes.appendChild(athleteFederation);
   
        let infoButtom= document.createElement("button");
        infoButtom.setAttribute("class","infoButtom");
        infoButtom.innerHTML= "Más información";

        let subInfoDiv= document.createElement("div");
        subInfoDiv.setAttribute("class","subinfoDivAthletes");
        subInfoDiv.style.cssText="heigth: 50px;"
       
        

        titleAthletes.setAttribute("class","titleAthletes")
        titleAthletes.innerHTML = athletesItem.name+" "+athletesItem.surnames;
        infoAthletes.setAttribute("class","infoAthletes");
        infoAthletes.innerHTML ="("+athletesItem.sport+")";

        athletesDivImg.appendChild(athletesImg);
        athletesDiv.appendChild(athletesDivImg);
        subInfoDiv.appendChild(titleAthletes);
        subInfoDiv.appendChild(dateAthletes);
        subInfoDiv.appendChild(infoAthletes);
        infoDivAthletes.appendChild(subInfoDiv);
        infoDivAthletes.appendChild(infoButtom);
        athletesDiv.appendChild(infoDivAthletes);

        athletesList.appendChild(athletesDiv);

    document.getElementById('sliderElement_deportista').appendChild(athletesList);
  
});


if (setREVStartSize!==undefined) setREVStartSize(
    {c: '#rev_slider_deportista', responsiveLevels: [1240,740,540,480], gridwidth: 365, gridheight: 450, sliderLayout: 'fullscreen', fullScreenAutoWidth:'off', fullScreenAlignForce:'off', fullScreenOffsetContainer:'off', fullScreenOffset:'on'});
let revapi91,
    tpp;
(function () {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
    else onLoad();

    function onLoad() {
        if (tpp === undefined) {
            tpp = jQuery;
            if ("on" == "on") tpp.noConflict()
        }
        if (tpp("#rev_slider_deportista").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_deportista");
        } else {
            revapi91 = tpp("#rev_slider_deportista").show().revolution({
                delay: 900000000000000000,
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 240,
                gridheight: 320,
                minHeight: 400,
                autoHeight: "off",
                sliderType: "carousel",
                sliderLayout: "auto",
                fullScreenAutoWidth: "of",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "on",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                  enable: !1,
                  outof: "wait",
                  visible_area: "100%",
                  presize: 1
                },
                fallbacks: {
                  isJoomla: !1,
                  panZoomDisableOnMobile: "off",
                  simplifyAll: "on",
                  nextSlideOnWindowFocus: "on",
                  disableFocusListener: !0,
                  ignoreHeightChanges: "off",
                  ignoreHeightChangesSize: 0,
                  allowHTML5AutoPlayOnAndroid: !0
                },
                parallax: {
                  type: "off",
                  levels: [
                    10,
                    15,
                    20,
                    25,
                    30,
                    35,
                    40,
                    45,
                    50,
                    55,
                    60,
                    65,
                    70,
                    75,
                    80,
                    85
                  ],
                  origo: "enterpoint",
                  speed: 400,
                  bgparallax: "off",
                  opacity: "on",
                  disable_onmobile: "off",
                  ddd_shadow: "on",
                  ddd_bgfreeze: "off",
                  ddd_overflow: "visible",
                  ddd_layer_overflow: "visible",
                  ddd_z_correction: 65,
                  ddd_path: "mouse"
                },
                scrolleffect: {
                  fade: "off",
                  blur: "off",
                  scale: "off",
                  grayscale: "off",
                  maxblur: 0,
                  on_layers: "off",
                  on_slidebg: "off",
                  on_static_layers: "off",
                  on_parallax_layers: "off",
                  on_parallax_static_layers: "off",
                  direction: "both",
                  multiplicator: 1.35,
                  multiplicator_layers: 0.5,
                  tilt: 30,
                  disable_on_mobile: "on"
                },
                carousel: {
                  easing: punchgs.Power3.easeInOut,
                  speed: 800,
                  showLayersAllTime: "off",
                  horizontal_align: "center",
                  vertical_align: "center",
                  infinity: "on",
                  space: 0,
                  maxVisibleItems: 7,
                  stretch: "off",
                  fadeout: "on",
                  maxRotation: 0,
                  minScale: 0,
                  vary_fade: "off",
                  vary_rotation: "on",
                  vary_scale: "off",
                  border_radius: "0px",
                  padding_top: 0,
                  padding_bottom: 0
                },
                navigation: {
                  keyboardNavigation: "off",
                  keyboard_direction: "horizontal",
                  mouseScrollNavigation: "off",
                  onHoverStop: "on",
                  touch: {
                    touchenabled: "off",
                    touchOnDesktop: "off",
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    drag_block_vertical: !1,
                    swipe_direction: "horizontal"
                  },
                  arrows: {
                    style: "hesperiden",
                    enable: 1,
                    hide_onmobile: !1,
                    hide_onleave: !0,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    tmp: "",
                    rtl: !1,
                    left: {
                      h_align: "left",
                      v_align: "center",
                      h_offset: -10,
                      v_offset: 0,
                      container: "slider"
                    },
                    right: {
                      h_align: "right",
                      v_align: "center",
                      h_offset: -10,
                      v_offset: 0,
                      container: "slider"
                    }
                  },
                  bullets: {
                    container: "slider",
                    rtl: !1,
                    style: "",
                    enable: !1,
                    hide_onmobile: !1,
                    hide_onleave: !0,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "left",
                    v_align: "center",
                    space: 0,
                    h_offset: 20,
                    v_offset: 0,
                    tmp:
                      '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                  },
                  thumbnails: {
                    container: "slider",
                    rtl: !1,
                    style: "",
                    enable: !1,
                    width: 100,
                    height: 50,
                    min_width: 100,
                    wrapper_padding: 2,
                    wrapper_color: "#f5f5f5",
                    wrapper_opacity: 1,
                    tmp:
                      '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                    visibleAmount: 1,
                    hide_onmobile: !1,
                    hide_onleave: !0,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    span: !1,
                    position: "inner",
                    space: 2,
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                  },
                  tabs: {
                    container: "slider",
                    rtl: !1,
                    style: "",
                    enable: !1,
                    width: 100,
                    min_width: 100,
                    height: 50,
                    wrapper_padding: 10,
                    wrapper_color: "#f5f5f5",
                    wrapper_opacity: 1,
                    tmp: '<span class="tp-tab-image"></span>',
                    visibleAmount: 5,
                    hide_onmobile: !1,
                    hide_onleave: !0,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    span: !1,
                    space: 0,
                    position: "inner",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                  },
                  extensions: "extensions/",
                  extensions_suffix: ".min.js",
                  debugMode: !1
                }
            });
        }; /* END OF revapi call */

    }; /* END OF ON LOAD FUNCTION */
}());  

}

document.querySelector("#buscador_deportistas").addEventListener("keyup",(e)=>{
        
    let searchValue= e.target.value.toUpperCase();
    console.log(searchValue)
    let athletesFiltered=[];
    if(searchValue.length > 0){
        athletes.data.map((list,i)=>{
            
            let listNames= list.name.toUpperCase();
            let listSurnames= list.surnames.toUpperCase();
            let listSport= list.sport.toUpperCase();
            console.log(listNames.includes(searchValue));
            listNames= listNames.includes(searchValue);
            listSurnames= listSurnames.includes(searchValue);
            listSport= listSport.includes(searchValue);

            if(listNames===true){
                
                athletesFiltered.push(list);
                console.log(athletesFiltered)
            }else if (listSurnames===true){
                athletesFiltered.push(list);
                console.log(athletesFiltered)
            } else if (listSport===true){
                athletesFiltered.push(list);
                console.log(athletesFiltered)
            }
            else{
                console.log("no hay coincidencias");
            }
            while(document.querySelector("#grid-2350").firstChild) {
                document.querySelector("#grid-2350").removeChild(document.querySelector("#grid-2350").firstChild);
            }
            sliderBase();
            mapAthletes(athletesFiltered);

        })
        
    } else {
        while(document.querySelector("#grid-2350").firstChild) {
            document.querySelector("#grid-2350").removeChild(document.querySelector("#grid-2350").firstChild);
        }
        sliderBase();
        mapAthletes(athletes.data);
    }
})




function sliderBase(){
    let sliderStructure= document.createElement("div");
    sliderStructure.setAttribute("id","rev_slider_notice");
        let sliderStart = document.createElement("div");
        sliderStart.setAttribute("id","rev_slider_deportista");
        sliderStart.setAttribute("class","rev_slider fullwidthabanner tp-simpleresposive");
        sliderStart.setAttribute("data-version","5.4.8");
            let sliderUl= document.createElement("ul");
            sliderUl.setAttribute("id","sliderElement_deportista");
            sliderUl.setAttribute("class","sliderelement1")


    sliderStart.appendChild(sliderUl);        
    sliderStructure.appendChild(sliderStart);
    document.querySelector("#grid-2350").appendChild(sliderStructure);
}




mapAthletes(athletes.data);

// <---------- deportistas version 2 ------------->

mapAthletesVersion2= (obj)=>{
    obj.map((athleteItem,i)=>{
        let sportPlayer= document.createElement("li");
        sportPlayer.setAttribute("class","div-deportista-detalle")
        sportPlayer.setAttribute("id",athleteItem.id_athlete)
        let divImgInfo= document.createElement("div");
        divImgInfo.style.cssText= "display: flex;"
        let divImg= document.createElement("div");
        let img= document.createElement("img");
        img.setAttribute("src",athleteItem.small_photo);
        img.style.cssText = "height: 60px; width: 60px; border-radius: 50%;";
        

        divImg.appendChild(img);
        divImgInfo.appendChild(divImg);

        

        let divInfoSportPlayer= document.createElement("div");
        let infoAthletes = document.createElement('p');
        infoAthletes.style.cssText="font-size: 1.2rem; margin-left: 2rem;font-family: 'Open Sans', sans-serif; line-height:1.4rem; text-decoration: none";
        infoAthletes.innerHTML = athleteItem.sport;

        divInfoSportPlayer.style.cssText= "display: grid; align-content: center;"

        let titleAthletes = document.createElement('h3');
        titleAthletes.style.cssText="font-size: 1.6rem; margin-left: 2rem;margin-bottom:0px; font-family: 'Oswald', sans-serif; color: #333333"
        titleAthletes.innerHTML = athleteItem.name+" "+athleteItem.surnames;

        let rssDiv= document.createElement("div");
        rssDiv.setAttribute("class","")
        rssDiv.style.cssText= "display:flex; align-self: flex-end; "

        let socialMediaIcon1 = document.createElement("i");
        let socialMediaLink1 = document.createElement("a");
        socialMediaLink1.setAttribute("href",athleteItem.social_media.instagram)
        socialMediaLink1.setAttribute("target","_blank")
        socialMediaIcon1.setAttribute("class","fa fa-instagram socialmedia-icon-deportistas")
       
        let socialMediaIcon2 = document.createElement("i");
        let socialMediaLink2 = document.createElement("a");
        socialMediaLink2.setAttribute("href",athleteItem.social_media.facebook)
        socialMediaLink2.setAttribute("target","_blank")
        socialMediaIcon2.setAttribute("class","fa fa-facebook socialmedia-icon-deportistas")
        
        let socialMediaIcon3 = document.createElement("i");
        let socialMediaLink3 = document.createElement("a");
       
        socialMediaLink3.setAttribute("href",athleteItem.social_media.twitter)
        socialMediaLink3.setAttribute("target","_blank")
        socialMediaIcon3.setAttribute("class","fa fa-twitter socialmedia-icon-deportistas")
       

        sportPlayer.addEventListener("mouseover", (e)=>{
    
            let divDetails= document.querySelector("#canvas-details img");
            let nameSurnamesH3= document.querySelector("#overlay-name-surname");
            let overlayContentInfo= document.querySelector("#overlay-content-info");   
            let searchValue= e.target.id;
           
            let athletesFiltered=[];
            if(searchValue.length > 0){
                athletes.data.map((list,i)=>{
                 
                    if(searchValue===list.id_athlete){
                        divDetails.src= list.large_photo;
                      
                        divDetails.setAttribute("class","canvas-img-deportistas")
                        divDetails.style.cssText="filter: blur(5px);"
                        nameSurnamesH3.innerHTML= list.name+" "+list.surnames;
                        overlayContentInfo.innerHTML= list.entry;
                        setTimeout(()=>{
                            divDetails.style.cssText="filter: blur(0px);"
                        },500);
                       
                    }
                    else{
                        
                    }
                })
                
            } else {
               
            }
        
        }
        );
       

        let linkToDeportista = document.createElement("a");
        linkToDeportista.setAttribute("id","enlaces-deportistas");
        linkToDeportista.setAttribute("class","enlaces-deportistas")

        linkToDeportista.setAttribute("href","https://cmscons.conpaas.org/public/index.html/"+athleteItem.id_athlete)
        linkToDeportista.style.cssText= "text-decoration: none, color: #3f3f3f !important;"

        divInfoSportPlayer.appendChild(titleAthletes)
        divInfoSportPlayer.appendChild(infoAthletes)
        
        socialMediaLink1.appendChild(socialMediaIcon1)
        socialMediaLink2.appendChild(socialMediaIcon2)
        socialMediaLink3.appendChild(socialMediaIcon3)

        rssDiv.appendChild(socialMediaLink1);
        rssDiv.appendChild(socialMediaLink2);
        rssDiv.appendChild(socialMediaLink3);

        linkToDeportista.appendChild(divInfoSportPlayer)

        divImgInfo.appendChild(linkToDeportista)
        sportPlayer.appendChild(divImgInfo);
        sportPlayer.appendChild(rssDiv);
        document.querySelector("#search-div").appendChild(sportPlayer);
       

    })
}

document.querySelector("#buscador_deportistas_2").addEventListener("keyup",(e)=>{
        
    let searchValue= e.target.value.toUpperCase();
    console.log(searchValue)
    let athletesFiltered=[];
    if(searchValue.length > 0){
        athletes.data.map((list,i)=>{
            
            let listNames= list.name.toUpperCase();
            let listSurnames= list.surnames.toUpperCase();
            let listSport= list.sport.toUpperCase();
            console.log(listNames.includes(searchValue));
            listNames= listNames.includes(searchValue);
            listSurnames= listSurnames.includes(searchValue);
            listSport= listSport.includes(searchValue);

            if(listNames===true){
                
                athletesFiltered.push(list);
                console.log(athletesFiltered)
            }else if (listSurnames===true){
                athletesFiltered.push(list);
                console.log(athletesFiltered)
            } else if (listSport===true){
                athletesFiltered.push(list);
                console.log(athletesFiltered)
            }
            else{
                console.log("no hay coincidencias");
            }
            while(document.querySelector("#search-div").firstChild) {
                document.querySelector("#search-div").removeChild(document.querySelector("#search-div").firstChild);
            }
           
            mapAthletesVersion2(athletesFiltered);

        })
        
    } else {
        while(document.querySelector("#search-div").firstChild) {
            document.querySelector("#search-div").removeChild(document.querySelector("#search-div").firstChild);
        }
        
        mapAthletesVersion2(athletes.data);
    }
})

mapAthletesVersion2(athletes.data);


// <--------- hover info trigger ------------>





// <---------- slider-pro ---------->

// function mapAthletes (obj) {



//     obj.map( function (athletesItem, i) {
    
//         let athletesList = document.createElement('li');
    
           
//             // athletesList.setAttribute("data-slotamount", "1");
//             // athletesList.setAttribute("class", "tp-resizeme ");
//             // // fototecaList.setAttribute("class", " tp-simpleresponsive tp-revslider-slidesli active-revslide");
//             // athletesList.setAttribute("data-hideafterloop", "0");
//             // athletesList.setAttribute("data-index", "rs-" + i);
//             // athletesList.setAttribute("data-hideslideonmobile", "off");
//             // athletesList.setAttribute("data-easein", "default");
//             // athletesList.setAttribute("data-easeout", "default");
//             // athletesList.setAttribute("data-masterspeed", "300");
//             // athletesList.setAttribute("data-thumb", athletesItem.url);
//             // athletesList.setAttribute("data-delay", "9000000000000000000");
//             // athletesList.setAttribute("data-rotate", "0");
//             // athletesList.setAttribute("data-saveperformance", "off");
//             // athletesList.setAttribute("data-title", "Slide");
//             // athletesList.setAttribute("data-width", "auto");
//             // athletesList.style.cssText = "height: 320px; transform: inherit;";
            
    
//             // athletesList.setAttribute("data-active", "true");
//             // athletesList.setAttribute("id", "fotoVisualization");
//             // athletesList.setAttribute("data-param3", "");
//             // athletesList.setAttribute("data-param4", "");
//             // athletesList.setAttribute("data-param5", "");
//             // athletesList.setAttribute("data-param6", "");
//             // athletesList.setAttribute("data-param7", "");
//             // athletesList.setAttribute("data-param8", "");
//             // athletesList.setAttribute("data-param9", "");
//             // athletesList.setAttribute("data-param10", "");
//             // athletesList.setAttribute("data-description", "");
    
//             let athletesDiv = document.createElement('div');
//             athletesDiv.setAttribute("class","sp-slide");
//             athletesDiv.style.cssText = "width: 230px; height:320px; background-color: #ffffff;text-overflow: ellipsis;";
    
//             let athletesDivImg= document.createElement("a");
//             athletesDivImg.setAttribute("href",athletesItem.small_photo)
//             let athletesImg= document.createElement('img');
          
        
           
            
//             athletesImg.setAttribute("src", athletesItem.small_photo);
//             athletesImg.setAttribute("alt", athletesItem.name);
//             athletesImg.setAttribute("title", athletesItem.name);
//             athletesImg.setAttribute("data-src", athletesItem.small_photo);
//             athletesImg.setAttribute("data-retina", athletesItem.small_photo);
//             // athletesImg.setAttribute("data-bgrepeat", "no-repeat");
//             // athletesImg.setAttribute("class", "img-circle rev-slidebg");
//             // athletesImg.setAttribute("allowfullscreen", "");
//             // athletesImg.style.cssText = "width: 80%; border-width: 1px; border-radius: 50%";
    
    
//             let infoDivAthletes= document.createElement("div");
//             infoDivAthletes.setAttribute("class","sp-caption infoDivAthletes")
    
//             let infoAthletes = document.createElement('p');
//             let titleAthletes = document.createElement('h2');
//             let dateAthletes = document.createElement("p");
//             dateAthletes.innerHTML= "";
//             dateAthletes.setAttribute("class","dateAthletes");
    
     
//             let athleteFederation= document.createElement("span");
//             athleteFederation.innerHTML= athletesItem.federation;
//             athleteFederation.setAttribute("class","athleteFederation");
//             dateAthletes.appendChild(athleteFederation);
       
//             let infoButtom= document.createElement("button");
//             infoButtom.setAttribute("class","infoButtom");
//             infoButtom.innerHTML= "Más información";
    
//             let subInfoDiv= document.createElement("div");
//             subInfoDiv.setAttribute("class","subinfoDivAthletes");
//             subInfoDiv.style.cssText="heigth: 50px;"
           
            
    
//             titleAthletes.setAttribute("class","titleAthletes")
//             titleAthletes.innerHTML = athletesItem.name+" "+athletesItem.surnames;
//             infoAthletes.setAttribute("class","infoAthletes");
//             infoAthletes.innerHTML ="("+athletesItem.sport+")";
    
//             athletesDivImg.appendChild(athletesImg);
//             athletesDiv.appendChild(athletesDivImg);
//             subInfoDiv.appendChild(titleAthletes);
//             subInfoDiv.appendChild(dateAthletes);
//             subInfoDiv.appendChild(infoAthletes);
//             infoDivAthletes.appendChild(subInfoDiv);
//             infoDivAthletes.appendChild(infoButtom);
//             athletesDiv.appendChild(infoDivAthletes);
    
//             athletesList.appendChild(athletesDiv);
    
//         document.getElementById('sp').appendChild(athletesDiv);
      
//     });

// }





// $( document ).ready(function( $ ) {
//     $( '#slider_pro' ).sliderPro({
//         width: 300,
//         arrows: true,
//         height: 300,
//         visibleSize: '100%',
//         forceSize: 'fullWidth',
//         autoSlideSize: true
//     });

//     // instantiate fancybox when a link is clicked
//     $( ".slider-pro" ).each(function(){
//         var slider = $( this );

//         slider.find( ".sp-image" ).parent( "a" ).on( "click", function( event ) {
//             event.preventDefault();
        
//             if ( slider.hasClass( "sp-swiping" ) === false ) {
//                 var sliderInstance = slider.data( "sliderPro" ),
//                     isAutoplay = sliderInstance.settings.autoplay;

//                 $.fancybox.open( slider.find( ".sp-image" ).parent( "a" ), {
//                     index: $( this ).parents( ".sp-slide" ).index(),
//                     afterShow: function() {
//                         if ( isAutoplay === true ) {
//                             sliderInstance.settings.autoplay = false;
//                             sliderInstance.stopAutoplay();
//                         }
//                     },
//                     afterClose: function() {
//                         if ( isAutoplay === true ) {
//                             sliderInstance.settings.autoplay = true;
//                             sliderInstance.startAutoplay();
//                         }
//                     }
                        
//                 });
//             }
//         });
//     });
// });