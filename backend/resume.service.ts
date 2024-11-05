

@Injectable({
  providedIn: 'root'
})

// resume.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    private apiUrl = 'http://localhost:5000/api/resumes';

    constructor(private http: HttpClient) {}

    getResumes(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    createResume(resume: any): Observable<any> {
        return this.http.post(this.apiUrl, resume);
    }
}
