$(function(){
    const carousel = `
 <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <ul>
                    <li><img src="" alt=""/><p>1</p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                </ul>
            </div>
            <div class="swiper-slide">
                <ul>
                    <li><img src="" alt=""/><p>2</p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                    <li><img src="" alt=""/><p></p></li>
                </ul>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>`;
    $(".e-neck").append(carousel);

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

    })
})