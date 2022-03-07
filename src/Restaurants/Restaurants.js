const restaurants = {
    제주상회: {
        name: '제주상회',
        url: 'https://map.naver.com/v5/entry/place/1660727152?c=14132476.4861853,4505836.1606915,15,0,0,0,dh',
        imageUrl: require('../image/jeju.jpeg'),
        type: '고기국수',
        rating: 4.5,
        explanation: '제주상회라는 가게 이름대로 제주도의 정취를 느낄 수 있는 메뉴들이 즐비하다. 그중에서도 단언 일등은 고기국수가 아닐까? 양심 가득하게 고기를 가득 담아주신다. 면을 다 먹고도 고기 건더기가 남아있을 정도다.'
    },
    에그썸: {
        name: '에그썸',
        url: 'https://map.naver.com/v5/entry/place/1555095319?c=14132476.4861853,4505836.1606915,15,0,0,0,dh',
        imageUrl: require('../image/eggsome.jpeg'),
        type: '오믈렛',
        rating: 4.7,
        explanation: '샤로수길에 위치해있는 오므라이스 맛집이다. 매장이 워낙에 작지만, 유명세를 얻어 웨이팅을 하는 경우가 많다. 특히 크림 오므라이스는 많은 사람들이 찾는 유명 메뉴다.'
    },
    차이나당: {
        name: '차이나당',
        url: 'https://map.naver.com/v5/entry/place/36123966?c=14132524.5094136,4505824.3076827,15,0,0,0,dh',
        imageUrl: require('../image/chinadang.jpeg'),
        type: '중식 및 주류',
        rating: 4.6,
        explanation: '가성비 넘치는 낙성대역 근처의 중국집. 술과 안주를 함께 즐길 수 있고, 밥 메뉴들도 물론 존재한다. 학생들이 합리적인 가격에 맛있는 중식을 먹고싶다면 차이나당을 추천한다.'
    },
    '로향 양꼬치': {
        name: '로향 양꼬치',
        url: 'https://map.naver.com/v5/entry/place/19873105?c=14132476.4861853,4505836.1606915,15,0,0,0,dh',
        imageUrl: require('../image/loheang.jpeg'),
        type: '양꼬치',
        rating: 4.3,
        explanation: '언제 가도 항상 붐비는 가게, 로향 양꼬치. 일반 양꼬치와 마라 양꼬치 등 여러가지 맛의 양꼬치를 즐길 수 있다. 꿔바로우와 같은 정통 중식을 함께 먹을수도 있다. 오늘 저녁은 칭따오에 양꼬치 어떤가?'
    }
}

export default restaurants;