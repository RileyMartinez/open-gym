import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config = {apiUrl: ''};

  constructor(private http: HttpClient) { }

  async loadConfig(): Promise<Config> {
    const config$ = this.http.get<Config>('assets/config.json');
    this.config = await lastValueFrom(config$, {defaultValue: {apiUrl: ''}});

    return this.config;
  }
}
