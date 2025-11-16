import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

export class CSVConnector {
    constructor(private filePath: string) {}

    read(): any[] {
        const content = fs.readFileSync(this.filePath, 'utf-8');
        return parse(content, {
            columns: true,
            skip_empty_lines: true
        });
    }

    write(data: any[]): void {
        const csv = stringify(data, { header: true });
        fs.writeFileSync(this.filePath, csv);
    }
}