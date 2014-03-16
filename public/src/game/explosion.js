/**
 * Created by DHilgaertner on 3/16/14.
 */

function Explosion (center, paper) {
    this._set = paper.set();

    var path1 = paper.path("m 1.16e-5,17.416213 18.7993534,16.425316 -5.35457,2.876526 7.648208,3.152842 -12.9926035,21.644714 19.9054035,-11.178806 0.999044,4.891714 5.388184,-5.869788 10.767454,8.70201 0.273494,-10.65801 19.29025,6.223176 L 49.472817,39.232429 59.231153,32.876127 49.118599,29.299755 61.251989,11.812055 43.433707,22.254477 41.762073,2.399083 31.752355,20.898123 27.043087,16.714435 26.335173,23.824891 0,17.416213 z");
    path1.attr({id: 'path1',fill: '#000000','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path1');
    var path2 = paper.path("m 3.8458688,19.144261 16.5652702,14.473354 -4.718243,2.534686 6.739301,2.778162 -11.448577,19.072484 17.539877,-9.850328 0.880322,4.31039 4.747854,-5.172232 9.487864,7.667878 0.241,-9.391428 16.997828,5.483622 -13.438964,-12.682978 8.598674,-5.60093 -8.91079,-3.151362 10.691474,-15.40949 -15.700784,9.201462 -1.47298,-17.495804 -8.820176,16.30064 -4.149626,-3.686506 -0.623784,6.26546 -23.2055431,-5.64708 z");
    path2.attr({id: 'path2',fill: '#ed1c24','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path2');
    var path3 = paper.path("m 12.584107,23.070577 11.489172,10.038282 -3.272432,1.75798 4.674178,1.926852 -7.94039,13.2281 12.16513,-6.831892 0.610564,2.989556 3.29297,-3.587304 6.580496,5.318208 0.16716,-6.51361 11.78918,3.803276 -9.320858,-8.796532 5.96378,-3.884636 -6.180256,-2.18569 7.415284,-10.687556 -10.88959,6.381856 -1.021614,-12.134564 -6.117408,11.305632 -2.878056,-2.556848 -0.432638,4.345534 -16.094664,-3.916644 z");
    path3.attr({id: 'path3',fill: '#ffcc00','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path3');
    var path4 = paper.path("m 18.709773,25.822995 7.930734,6.929216 -2.258892,1.213498 3.226486,1.330066 -5.481084,9.13108 8.397336,-4.71591 0.421458,2.06363 2.273068,-2.476242 4.542378,3.671048 0.11538,-4.49621 8.137826,2.625318 -6.433996,-6.07206 4.116674,-2.681482 -4.266102,-1.508738 5.118616,-7.377398 -7.516856,4.405262 -0.7052,-8.376234 -4.222716,7.804044 -1.986668,-1.76494 -0.298636,2.99963 -11.10981,-2.703578 z");
    path4.attr({id: 'path4',fill: '#000000','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path4');
    var path5 = paper.path("m 24.639853,28.487535 4.485912,3.919416 -1.277712,0.686398 1.825018,0.752334 -3.1003,5.16487 4.749838,-2.66749 0.238392,1.167264 1.28573,-1.400652 2.569334,2.076478 0.06526,-2.54322 4.60305,1.484976 -3.639302,-3.434578 2.32854,-1.516744 -2.413062,-0.853396 2.895276,-4.172924 -4.251808,2.491776 -0.398886,-4.737902 -2.388522,4.41425 -1.12373,-0.998314 -0.16892,1.6967 -6.284112,-1.529242 z");
    path5.attr({id: 'path5',fill: '#0066ff','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path5');
    var path6 = paper.path("m 26.686841,29.407301 3.296804,2.88047 -0.939022,0.50445 1.34125,0.552908 -2.278484,3.795786 3.490768,-1.960402 0.1752,0.85785 0.944912,-1.029372 1.888266,1.526052 0.04796,-1.869072 3.38289,1.091344 -2.674608,-2.524152 1.711298,-1.114692 -1.773416,-0.62718 2.127808,-3.06678 -3.124756,1.831264 -0.29315,-3.481996 -1.755382,3.244136 -0.825854,-0.733684 -0.12414,1.246946 -4.618342,-1.123876 z");
    path6.attr({id: 'path6',fill: '#ed1c24',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path6');
    var path7 = paper.path("m 29.707025,30.764349 1.542358,1.347582 -0.439306,0.235998 0.627484,0.25867 -1.065954,1.775798 1.6331,-0.917142 0.08196,0.40133 0.442062,-0.481574 0.883396,0.713938 0.02244,-0.874414 1.582632,0.510568 -1.251274,-1.180886 0.800604,-0.52149 -0.829666,-0.293416 0.995464,-1.434746 -1.46187,0.856728 -0.13714,-1.628996 -0.821226,1.517718 -0.386364,-0.343244 -0.05808,0.583364 -2.160618,-0.525786 z");
    path7.attr({id: 'path7',fill: '#ffffff',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path7');

    this._set.push(path1,path2,path3,path4,path5,path6,path7);

    var tf = String.format("t{0},{1}...", center.x - 26, center.y - 33);

    this._set.transform(tf);
}

Explosion.prototype.blowUp = function() {
    return null;
};