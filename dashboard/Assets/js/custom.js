document.addEventListener('DOMContentLoaded', function () {
    var calendario = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendario, {
        locale: 'pt-br',
        plugins: ['interaction', 'dayGrid'],
        editable: true,
        eventLimit: true,
        events: '../Assets/js/exemploEntradaCalendario.json',
        extraParams: function () {
            return {
                cachebuster: new Date().valueOf()
            };
        },
        eventClick: function (info) {
            info.jsEvent.preventDefault(); 
            //EVENTO AO CLICAR EM UM CARDAPIO CADASTRADO
            $('#visualizar').modal('show');
        },
        selectable: true,
        select: function (info) {
            //EVENTO AO CLICAR EM UM DIA (CADASTRAR CARDAPIO)
            $('#cadastrar').modal('show');
        }
    });

    calendar.render();
});