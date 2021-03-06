// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_NAME
export const sortByName = () => ({
    type: 'SORT_BY_NAME'
})

// SORT_BY_AGE
export const sortByAge = () => ({
    type: 'SORT_BY_AGE'
})

// SORT_BY_SUBJECT
export const sortBySubject = () => ({
    type: 'SORT_BY_SUBJECT'
})

// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})
