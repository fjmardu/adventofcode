"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOC_03_2020 = void 0;
const global_1 = require("./global");
class AOC_03_2020 {
    static abailar() {
        const caminos = [
            { c: 1, f: 1 },
            { c: 3, f: 1 },
            { c: 5, f: 1 },
            { c: 7, f: 1 },
            { c: 1, f: 2 },
        ];
        //PARTE 1----------------------------------
        //let arboles:number=this.cuentArboles(3,1)
        //PARTE 1----------------------------------
        //PARTE 2----------------------------------
        let arboles = 1;
        caminos.forEach(camino => {
            arboles = arboles * this.cuentArboles(camino.c, camino.f);
        });
        console.log(arboles);
        //PARTE 2----------------------------------
    }
    static cuentArboles(columIni, filaIni) {
        const plano = global_1.global.inputToArrayStrSinEspacios(this.input);
        let columnaAux = columIni;
        let arboles = 0;
        for (let fila = filaIni; fila < plano.length; fila = fila + filaIni) {
            if (columnaAux > plano[0].length - 1) {
                columnaAux = columnaAux - plano[0].length;
            }
            if (plano[fila][columnaAux] === '#')
                arboles++;
            const str = plano[fila][columnaAux];
            columnaAux = columnaAux + columIni;
        }
        console.log('Árboles=' + arboles);
        return arboles;
    }
}
exports.AOC_03_2020 = AOC_03_2020;
/* private static input:string=
`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#` */
AOC_03_2020.input = `.....##.#.....#........#....##.
    ....#...#...#.#.......#........
    .....##.#......#.......#.......
    ...##.........#...#............
    ........#...#.......#.........#
    ..........#......#..#....#....#
    ..................#..#..#....##
    .....##...#..#..#..#..#.##.....
    ..##.###....#.#.........#......
    #.......#......#......#....##..
    .....#..#.#.......#......#.....
    ............#............#.....
    ...#.#........#........#.#.##.#
    .#..#...#.....#....##..........
    ##..........#...#...#..........
    ...........#...###...#.......##
    .#..#............#........#....
    ##.#..#.....#.......#.#.#......
    .##.....#....#.#.......#.##....
    ..##...........#.......#..##.#.
    ##...#.#........#..#...#...#..#
    .#..#........#.#.......#..#...#
    .##.##.##...#.#............##..
    ..#.#..###......#..#......#....
    .#..#..#.##.#.##.#.#...........
    ...#....#..#.#.#.........#..#..
    ......#.#....##.##......#......
    #....#.##.##....#..#...........
    ...#.#.#.#..#.#..#.#..#.##.....
    #.....#######.###.##.#.#.#.....
    ..#.##.....##......#...#.......
    ..#....#..#...##.#..#..#..#..#.
    .............#.##....#.........
    .#....#.##.....#...............
    .#............#....#...#.##....
    .#.....#.##.###.......#..#.....
    .#...#.........#.......#..#....
    ..#.#..#.##.......##...........
    .....##..#..#..#..#.##..#.....#
    ..##............##...#..#......
    ...#..#....#..##.....##..#.#...
    #.....##....#.#.#...#...#..##.#
    #.#..#.........#.##.#...#.#.#..
    .....#.#....##....#............
    #.......#..#.....##..#...#...#.
    .....#.#...#...#..#......#.....
    ..##....#.#.#.#.#..#...........
    ##..#...#.........#......#...#.
    ..#...#.#.#.#..#.#.##..##......
    #............###.....###.......
    ..........#...#........###.....
    .......##...#...#...#........#.
    .#..#.##.#.....................
    .#..##........##.##...#.......#
    .......##......#.....#......#..
    .##.#.....#......#......#......
    #...##.#.#...#.#...............
    ........#..#...#.##.......#....
    ...................#...#...##..
    ...#...#.........#.....#..#.#..
    .###..#........#..##.##..#.##..
    #...#.....#.....#.....#..#..#..
    ###..#.....#.#.#.#......#....#.
    #........#....##.#...##........
    .#.#..##........##....##.#.#...
    #...#....#.###.#.#.........#...
    ...#...##..###.......#.........
    ......#....#..##..#.....#.#....
    ........#...##...###......##...
    ..........##.#.......##........
    ...#....#......#...##.....#....
    ###.#.....#.#..#..#....#...#..#
    .#.....#.#....#...............#
    ..#....#....####....###....#.#.
    ....##........#..#.##.#....#...
    .......##...#...#..#....####...
    #...##.#......##...#..#........
    ..##..#.##....#.......##.#.#...
    ..#.#...............#...#.#....
    ....#.....#.#.....#.##.......#.
    ...#.#..##.#.#..............##.
    ..#.....#...#.............#.##.
    ##..#.#...#........#..#.....##.
    ...........##...#.#.###...#....
    ...#.#.#..#..................#.
    .#...##.............#...#......
    ..#..#...#.#.......#...#.....#.
    ..##.......#.#.................
    .##..#........###.....#....#.##
    ......#..###.......#....##....#
    ....#.....#.................#..
    ........#...#...#..............
    ...#..#.###.......#..#.#.#.##..
    ..#...#.....#....#.........#...
    ...#.............#........###..
    ......#..............#......#..
    #..#...........#...#..........#
    ...##...#.###..#...#.....#.#...
    ....#..##......#.......##......
    ....#....##.#...#.#..#....#...#
    .#...........#..#....##...#..##
    ..#.#.................###.#...#
    ..#.#.#...##...........#.......
    ..........#..##...#.#..##....##
    ........#........#.##..#.#...#.
    .....#...##.......##......#...#
    ....#...#..#..#.....#..........
    .#..#......#..#..#..###.......#
    .##..........#...#...#.#.....##
    ..#..........#.#.#...###.......
    ....#................#...##....
    .##..#....#..........#.#.#.....
    ..##...#.#........#.....#.##...
    ....####.....#..#.........##..#
    ......#.........#...#..........
    ....#...................#..##..
    .##....#.#.........#....#...#..
    ....##...##.....#..####........
    ..##.#....#.#.......##...#.....
    #...#.#.#...#..#..##.....#.....
    #..................###.....#...
    #.#.....#.......#.#...###.#....
    .#..#....#............#........
    #.#....#..#.#...............#..
    ..#..#..#.............#......#.
    ..#.......##...................
    .#....#.........#....#.#.#..#..
    ....#....#..#...............#..
    ......#..#..##......#.........#
    ..#.##........##......#..#..#.#
    #.....#.#....#.........##...#..
    ###..............#....###...##.
    ....#..##......#.......##......
    ......#...#.##......##....#..#.
    ..........#....#..##.......#..#
    .#..#...##..#...........#..#..#
    .....#....#...#..###...###....#
    .#####..#...#.#.#..#.#.###...##
    ..##............##.#...#.##...#
    .##..#...#...#....##.#..#..##..
    .#....#...#............##..#...
    .#.#......#....#....#..##..##..
    .........#...#.......#.##..#...
    #.........#.....##.....#..#..#.
    ...##.#...#...#..#..#....##..##
    .#............#...#....##......
    ..#...#.##.........#.#......#.#
    ....#.##........#.........#..##
    #.........#......#.#......#..#.
    ........#.#.......#.#........#.
    ..#..........##.#...#..#.#.....
    ..#...#....#...#...#..#.#..#.#.
    .#.........#....#..#####..#....
    #.#....#.#.###...#.............
    ..##...........##......##......
    #.....#..#....#...............#
    ...#.#..#....##......#...##....
    ...#........#.....#...#..#.....
    .#......##.........#......#....
    ..#..###.##...#.#.....#........
    .............#......#..#.......
    ..#...............#.#...#..#..#
    .......#..#...#.#####......#..#
    .........#.....#...............
    ##........#............#.#.....
    .#...#.....#..#..#...#....#...#
    ..#....#....##......##.....#.#.
    #...##..##......#...#....#.....
    ....#.#.#.....###....##.##....#
    ..........##...##.......#......
    ..#.......#...##.#....##.##....
    ....#........................#.
    ...#...#.#.##...#.....#...#..#.
    .#....##..#..#..........##..##.
    .#.....#..#...#.##.....#.......
    .#.##...#.#..#.....##....#...#.
    .##...#........##....#..#......
    .....#........#..........#.#..#
    ....#..##.......#..#.....#.....
    ...........#...#........#.##..#
    .....#..#....#..#.#.....#....##
    .....#....#.##.#..##...........
    ...##.......##.........#.......
    ...............##..#....#.#....
    .......###..#........#..####.##
    .......#.##...#.#....#.####....
    ....#...............#..........
    ##.#.......#.....#......#...#..
    ......##.....#....#.....#..#..#
    .....#...##.............#......
    #.#.##.#.....#..#........#.....
    ......##....#..#........#......
    ............#........#..#.#....
    ##.......#......#...####..#.##.
    ..##..#...#.............#.##...
    .....#..##......#.##......###..
    ............#........#........#
    #.#.#.#...#.#.....#.........#..
    .........#...............#.....
    .............###.#.......#....#
    ###.##..#..#..........#....#...
    #......#...#..#..#.....#.##....
    ............#....#....#..#.....
    ..#.#....#...#......#.#..#..##.
    ...#........................#..
    #.#...#..........#......#.#....
    .........#................#...#
    ##.....#....#........##.......#
    #...##........#...#...........#
    ...#...#..........##.......#.#.
    ..#.#.#....#......##...........
    ...#.#...#.##.#..#.#.##........
    #....##.....###..#.......#.....
    ###.....#.#.#...#..#.........##
    ..#......#..###...#.#.#.....#.#
    .#....#.....#............#..##.
    ....#....##..........#.....##..
    #...........#....#...#..#...##.
    ..#.......#.....#..........#...
    .#..#................#......#..
    ..#......#.#...#..#.#....#....#
    ...#..#...###..#..##....#.#....
    ..#..............#.....#.......
    ...#.#...#.........#.#.........
    ##......##...........##.#.##..#
    ..#..##..#....#.#......#.#...##
    ...#.###....###...#.....#......
    #.#................#......#....
    ..#.....#.....#....##.......#..
    .#.#...............##..#.......
    ...#....#.......#.#.....##..#..
    .........#....#.......#.#...##.
    #....#......##.#.........##...#
    #.............#..##.#.#..##....
    ...#....#..#...#....#.#.#.#...#
    .#....#....#..##.....#.#...###.
    ##............#.#...##.#..#.#..
    ##.#....##.....#..#..###....#..
    ##....#................##......
    ...##..#...#..###....#.....##..
    .#...##......#..#.#.....#...#..
    ..##......##...#.##.......#....
    ......#.....#.....##........#.#
    ##....#...........#............
    #.......#....#..#.##..##.#..#..
    .#....##.#.....#..#..#.........
    .#....#.#.#...#.....##.....#.#.
    .......##.#.#........#......##.
    ##........#.##.......#...#..#..
    ...###..##....#.#....#.#.......
    ......#.......#...##.....#...#.
    ..#......##.#......#.....#.....
    .....#.....###...#.............
    #...#.#...#...#..#......#......
    #.....#.......###.#....###.#...
    ...#.......#....####....##..#..
    #.#.....#....#........#.......#
    .........#.......#......#.#...#
    ..##....#.....##...............
    ..........#..#.#..#......#.....
    ..................##...##.#....
    ........#.......#...#..#.#.#...
    .....#.#..##..#..#.#..#.......#
    .....#........#..#..#....#....#
    ##............#..#..#...#....#.
    .....#....................##..#
    ........##.#....###............
    ##.......#.##................#.
    .....###.#..#..#...#....###.##.
    .#......#.#....#.....##.#......
    ...##......##.........#...#....
    ....####..............#........
    #...#.#..##..##.........##.....
    ......#......#....#..#.........
    #.....#.....#.##...............
    ..#.##..#...##.#.####..#....###
    #..#......#....#.##..##...#.#..
    #....#.......#.....#.....#.#...
    ##.......#.....##...#.....#....
    ...#...##..........#..##..##..#
    .###..#..##...#....#...#..#....
    ......##..###.......###...#....
    ....#...#.#.......#.##...##..##
    #.#......#..##.#.#..#..#..#....
    ......#........#.......#.......
    ..........#.#.....##...........
    ......#..#........#..#.#..###..
    ##..#.............##..#........
    .........#....#.....#.........#
    .....#..##...#..#..##.##......#
    ###..#...........#.......#....#
    ...............#....#.#........
    .##.#...#.#........##....#.....
    .##.###...##..###....#...#...#.
    .##..#....#.#.#...#.#.#.#...#..
    .###.#...#.......#....#..#.....
    ..#..#.#.#.#........#.....##...
    .#.......#.#...#.#...........##
    ...#.....##....#.....##...#....
    ................#.....####...#.
    .#.#......#.......##...#.##....
    .###.........#.#......#..#.#...
    #......#...#....#..##.......#..
    .##..#....#..#...........#...#.
    .#...#.......##........#.##....
    ..#...........#...##...........
    .....##....##......#....#..#...
    #......#.#...#.##.#...##....#..
    #....................#...##...#
    ..#............#........#......
    .............#.........##.....#
    ...#...#......##.#...#...#.#...
    ..#...#.#.................#....
    ....##...#....#...###.##......#
    ...#....#...#..#...#....#.....#
    ...##.#........#..#.........#..
    ..##.....#..##...#.....##...#..
    #.........#.#.#...#......#...#.
    #.#...........#...#..#..#..##..
    ..#..#..##....#..........#.###.
    .....#..#....#.#...#...#..#..#.
    ###.....#..#.................#.
    .#..##.##.#......#....##..#....`;