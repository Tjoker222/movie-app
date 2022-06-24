export type Filter = {
    name: string;
}

export type FilterContextData = {
    filters: Filter[],
    CurrentFilter: Filter,
    setCurrentFilter: (filter: Filter)=>void
}