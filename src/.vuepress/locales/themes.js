module.exports = {
    '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
            {
                text: 'Editors',
                items: [
                    {
                        text: 'Web Design Tool',
                        link: 'https://editor.easylogic.studio'
                    },
                    {
                        text: 'Gradient Editor',
                        link: 'https://gradient.easylogic.studio'
                    }
                ]
            },
            {
                text: 'Story',
                items: [
                    {
                        text: '1. Color',
                        link: '/color/'
                    },
                    {
                        text: '2. ColorPicker',
                        link: 'https://colorpicker.easylogic.studio/'
                    }, {
                        text: '3. GradientPicker',
                        link: 'https://gradientpicker.easylogic.studio/'
                    },
                    {
                        text: '4. Image Filter',
                        link: 'https://image-filter.easylogic.studio/'
                    }
                ]
            }],
        // sidebar: 'auto'
        sidebar: {
            '/color/': [
                '',
                'api'
            ],
            '/': [
                '',
            ]
        }
    },
    '/ko/': {
        selectText: '언어 선택',
        label: '한국어',
        nav: [
            {
                text: 'Editors',
                items: [
                    {
                        text: 'Web Design Tool',
                        link: 'https://editor.easylogic.studio'
                    },
                    {
                        text: 'Gradient Editor',
                        link: 'https://gradient.easylogic.studio'
                    }
                ]
            },
            {
                text: '이야기',
                items: [
                    {
                        text: '1. Color',
                        link: '/ko/'
                    },
                    {
                        text: '2. ColorPicker',
                        link: 'https://colorpicker.easylogic.studio/'
                    }, {
                        text: '3. GradientPicker',
                        link: 'https://gradientpicker.easylogic.studio/'
                    },
                    {
                        text: '4. Image Filter',
                        link: 'https://image-filter.easylogic.studio/'
                    }
                ]
            }],
        // sidebar: 'auto'
        sidebar: {
            '/ko/color/': [
                '',
                'api'
            ],
            '/ko/': [
                ''
            ]
        }
    }
}