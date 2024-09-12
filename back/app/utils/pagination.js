
export const usePagination = (query) => {
    const page = parseInt(query.page) || 1
    const limit = parseInt(query.limit) || 10
    const offset = (page - 1) * limit

    return { offset, limit }
}

