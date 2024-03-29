import { createSlice } from "@reduxjs/toolkit";
 
export const nodesSlice = createSlice({
    name: "nodes",
    initialState: [
        {
            "id": 1,
            'text': 'Группа ученых-астрономов наблюдает звезду, которая вращается вокруг черной дыры уже 20 лет. Она уже достаточно близко к тому моменту, когда «гравитационное смещение» обессилит звезду и она упадет во власть черной дыры',
            "category": 'Космос'
        },
        {
            "id": 2,
            'text': 'Точный возраст солнечной системы установить довольно тяжело, но плюс минус 30 миллионов лет и наша планета старушка уже существует как 4,571 миллиарда лет. При этом ученые говорят о бесконечном росте Солнца, так например через 5 миллиардов лет Солнце будет в несколько раз больше прежнего. А через 7,5 миллиардов лет поверхность Солнца поглотит Землю полностью',
            "category": 'Космос'
        },
        {
            "id": 3,
            'text': 'Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям, очищенные креветки и нарезанные на крупные кусочки грибы. Провариваем при небольшом кипении около 5 минут. 4. Добавляем рыбный соус, нарезанный колечками чили, сок лайма и порезанный кубиками помидор без шкурки. 5. Вливаем кокосовое молоко. Варим после закипания 2-3 минуты.',
            "category": 'Рецепты',
        },
        {
            "id": 4,
            'text': 'Искусственный интеллект (ИИ) быстро становится неотъемлемой частью современного общества, трансформируя различные аспекты нашей жизни. Эта статья исследует влияние ИИ на различные отрасли, включая здравоохранение, образование, транспорт и финансы. В статье рассматриваются возможности ИИ в улучшении диагностики и лечения заболеваний, персонализации обучения, оптимизации транспортных систем и автоматизации финансовых процессов. Кроме того, она анализирует потенциальные этические и социальные последствия использования ИИ, такие как потеря рабочих мест, предвзятость в принятии решений и вопросы конфиденциальности. Эта статья представляет собой всесторонний обзор влияния ИИ на современное общество, предоставляя ценные сведения для лиц, принимающих решения, исследователей и всех, кто интересуется будущим ИИ',
            "category": 'IT',
        },
        {
            "id": 5,
            'text': 'Искусственный интеллект (ИИ) быстро становится неотъемлемой частью современного общества, трансформируя различные аспекты нашей жизни. Эта статья исследует влияние ИИ на различные отрасли, включая здравоохранение, образование, транспорт и финансы. В статье рассматриваются возможности ИИ в улучшении диагностики и лечения заболеваний.',
            "category": 'IT',
        },
        {
            "id": 6,
            'text': 'Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям, очищенные креветки и нарезанные на крупные кусочки грибы. Провариваем при небольшом кипении около 5 минут. 4. Добавляем рыбный соус, нарезанный колечками чили, сок лайма и порезанный кубиками помидор без шкурки. 5. Вливаем кокосовое молоко. Варим после закипания 2-3 минуты.Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям, очищенные креветки и нарезанные на крупные кусочки грибы. Провариваем при небольшом кипении около 5 минут. 4. Добавляем рыбный соус, нарезанный колечками чили, сок лайма и порезанный кубиками помидор без шкурки. 5. Вливаем кокосовое молоко. Варим после закипания 2-3 минуты.',
            "category": 'Рецепты',
        },
        {
            "id": 7,
            'text': 'Точный возраст солнечной системы установить довольно тяжело, но плюс минус 30 миллионов лет и наша планета старушка уже существует как 4,571 миллиарда лет. При этом ученые говорят о бесконечном росте Солнца, так например через 5 миллиардов лет Солнце будет в несколько раз больше прежнего. А через 7,5 миллиардов лет поверхность Солнца поглотит Землю полностью. Точный возраст солнечной системы установить довольно тяжело, но плюс минус 30 миллионов лет и наша планета старушка уже существует как 4,571 миллиарда лет. При этом ученые говорят о бесконечном росте Солнца, так например через 5 миллиардов лет Солнце будет в несколько раз больше прежнего. А через 7,5 миллиардов лет поверхность Солнца поглотит Землю полностью.',
            "category": 'Космос',
        },
        {
            "id": 8,
            'text': 'Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям.',
            "category": 'Рецепты',
        },
        {
            "id": 9,
            'text': 'Искусственный интеллект имеет огромный потенциал для повышения эффективности и автоматизации различных процессов, что помогает улучшить качество жизни людей и повысить производительность. Однако существуют также опасения относительно этики и безопасности использования искусственного интеллекта, такие как проблемы конфиденциальности данных, потенциальные угрозы для рабочих мест и возможность злоупотребления технологией',
            "category": 'IT',
        },
        {
            "id": 10,
            'text': 'Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям, очищенные креветки и нарезанные на крупные кусочки грибы. Провариваем при небольшом кипении около 5 минут. 4. Добавляем рыбный соус, нарезанный колечками чили, сок лайма и порезанный кубиками помидор без шкурки. 5. Вливаем кокосовое молоко. Варим после закипания 2-3 минуты.Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям, очищенные креветки и нарезанные на крупные кусочки грибы. Провариваем при небольшом кипении около 5 минут. 4. Добавляем рыбный соус, нарезанный колечками чили, сок лайма и порезанный кубиками помидор без шкурки. 5. Вливаем кокосовое молоко. Варим после закипания 2-3 минуты.',
            "category": 'Рецепты',
        },
        {
            "id": 11,
            'text': 'Пошаговый рецепт супа Том Ям: 1. Готовим бульон без соли (или используем 1 бульонный кубик на 0,5 литра воды). 2. Добавляем приправы: стебли лемонграсса (или цедру лайма), нарезанный галангал, листья каффира. Провариваем все 3-5 минут и вылавливаем из бульона. 3. В кипящий бульон добавляем пасту Том Ям, очищенные креветки и нарезанные на крупные кусочки грибы. Провариваем при небольшом кипении около 5 минут',
            "category": 'Рецепты',
        },
    ],
    reducers: {
        addNode: (state, action) => {
            state.push(action.payload);
        },
        deleteNode: (state, action) => {
            const indexToDelete = state.findIndex(node => node.id === action.payload);
            if (indexToDelete !== -1) {
                state.splice(indexToDelete, 1);
            }
        },
    },
});
 
export const { addNode, deleteNode } = nodesSlice.actions;

export default nodesSlice.reducer;
