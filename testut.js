describe('YouTube', function () {
    describe('API', function () {
        it('Получение видео работает', function (done) {
            $.when (YouTube.getLastVideos()).then (function (rezult) {
                done();

            })
        });
        it('Колличество видео больше 0', function (done) {
            $.when (YouTube.getLastVideos()).then (function (rezult) {
                if (rezult.items.length > 0) {
                    done();
            }
        })
        });

        /*it('У видео есть ID', function (done) {
            $.when (YouTube.getLastVideos()).then (function (rezult) {
                var razmMas = rezult.items.length;
                /!*console.log(razmMas);*!/
                /!*console.log(rezult.items);*!/
                for (var i = 0; i<razmMas; i++ ) {
                    /!*var index = $(rezult).parent().data('index');
                    var video = rezult.items[index];*!/
                    var ok = true;
                    var id = rezult.items[i].id
                    if (id == null || id == undefined) {
                       ok = false
                    }

                    /!*return razmMas;*!/
                }

                done();
                })
            })*/


        })
        });

/*
describe("pow", function() {

    function makeTest(x) {
        var expected = x * x * x;
        it("при возведении " + x + " в степень 3 результат: " + expected, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (var x = 1; x <= 5; x++) {
        makeTest(x);
    }

});*/
