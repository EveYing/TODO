export interface Board {
    id?: string;
    title?: string;
    priority?: number;
    tasks?: Task[];
}

export interface Task {
    description?: string;
    label?: 'LightCyan' | 'LightBlue' | 'LightCoral' | 'LightGoldenRodYellow' | 'LightGray' | 'LightSeaGreen' | 'LightSalmon' | 'LightPink';
}