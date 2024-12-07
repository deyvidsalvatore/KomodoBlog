import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h2>About Me</h2>
      <div class="content-section">
        <img src="assets/img/profile.webp" alt="Profile Picture" class="profile-img" />
        <div class="text-section">
          <p>
            Hello! I'm <strong>Deyvid Santos</strong>, a passionate web developer with over 2 years of experience in building interactive and dynamic web applications.
          </p>
          <p>
            I specialize in modern frontend frameworks like Angular, React, and Vue.js. I take pride in creating intuitive, user-friendly designs with clean, maintainable code.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, hiking, reading sci-fi novels, and contributing to open-source projects.
          </p>
        </div>
      </div>
      <button mat-button class="close-btn" (click)="close()">Close</button>
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .about-container {
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
        font-size: 1rem;
        color: #555;
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      h2 {
        margin-bottom: 1.5rem;
        font-size: 2.4rem;
        color: #333;
      }

      .content-section {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;
        margin: 1.5rem 0;
        flex-wrap: wrap;
      }

      .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      }

      .text-section {
        max-width: 400px;
        font-size: 1.1rem;
        line-height: 1.8;
        color: #666;
        text-align: left;
      }

      .close-btn {
        margin-top: 1.5rem;
        color: #fff;
        background-color: #555;
        border: none;
        border-radius: 4px;
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .close-btn:hover {
        background-color: #333;
      }

      @media (max-width: 768px) {
        .content-section {
          flex-direction: column;
        }

        .text-section {
          text-align: center;
        }

        .profile-img {
          display: flex;
          align-self: center;
          width: 120px;
          height: 120px;
        }

        h2 {
          font-size: 1.8rem;
        }

        .text-section {
          font-size: 1rem;
        }
      }
    `
  ]
})
export class AboutComponent {
  constructor(private dialogRef: MatDialogRef<AboutComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
