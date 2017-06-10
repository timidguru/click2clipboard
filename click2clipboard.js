$(function() {

    document.addEventListener('copy', function(event) {
        var eventTarget = null;
        if($(event.target).hasClass("click2clipboard") === true) {
            eventTarget = $(event.target);
        } else if($(event.target).parent().hasClass("click2clipboard") === true) {
            eventTarget = $(event.target).parent();
        }

        if(eventTarget !== null) {
            var text = eventTarget.text();
            if(window.clipboardData) {
                window.clipboardData.setData('TEXT', text);
            } else {
                event.clipboardData.setData('text/plain', text);
            }
            window.alert('텍스트("' + text + '")가 클립보드에 저장되었습니다.');
            event.preventDefault();
        }
    });

    $(document).on('click', 'span.click2clipboard', function() {
        document.execCommand('copy');
    });
});
