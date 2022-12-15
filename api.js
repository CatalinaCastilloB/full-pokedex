        $(document).ready(function() {
            for (let i = 1; i < 906; i++) {
                $('#contenedorPokedex').append('<div class="pokemonGeneral">' + '<img class="poke" value="' + i + '" id="' + i + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png" alt = "bulbasaur" >' +'</div>')
            }
            $('.pokemonGeneral').click(function() {
                let almacenarValor = $(this).attr('value');
                console.log(almacenarValor);
                $.get('https://pokeapi.co/api/v2/pokemon/' + almacenarValor + '/', function(respuesta) {
                    console.log(respuesta)
                    let nombre = respuesta.name;
                    let tipo1 = respuesta.types[0].type.name;
                    // let tipo2 = respuesta.types[1].type.name ? 'noone' : respuesta.types[1].type.name;
                    let tipos = respuesta.types;
                    let imagen = respuesta.sprites.front_default;
                    $('#infoPokemon').html('<img class="pokebola" src="' + imagen + '"" alt="' + nombre + '">' + '<h1>Nombre: </h1>' + '<h2>' + nombre + '</h2>' + '<h1>Tipo: </h1>' + '<h2>' + tipo1 + '</h2>');

                }), 'json';

            });
        });
