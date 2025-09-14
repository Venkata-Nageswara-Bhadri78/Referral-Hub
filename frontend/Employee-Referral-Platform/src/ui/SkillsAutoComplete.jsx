import * as React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Skills list as simple strings
const skillsList = [
  "JavaScript", "TypeScript", "Python", "Java", "C", "C++", "C#", "Go", "Rust", "PHP", "Ruby", "Kotlin", "Swift", "Dart", "R",
  "React", "Next.js", "Angular", "Vue.js", "Svelte", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Material UI",
  "Node.js", "Express.js", "Django", "Flask", "Spring Boot", "NestJS", "FastAPI", "Laravel", "Ruby on Rails",
  "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase", "Oracle",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions",
  "React Native", "Flutter", "SwiftUI", "Ionic",
  "Git", "GitHub", "GitLab", "Jira", "Figma", "Photoshop", "Illustrator",
  "Pandas", "NumPy", "Matplotlib", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV",
  "Jest", "Mocha", "Cypress", "Selenium", "Playwright",
  "Leadership", "Communication", "Problem Solving", "Teamwork", "Time Management", "Critical Thinking",
];

export default function SkillsAutocomplete({ skills, setSkills }) {
  return (
    <Stack spacing={2}>
      <Autocomplete
        multiple
        size="small"
        options={skillsList} // options as strings
        value={skills} // array of strings
        onChange={(event, newValue) => setSkills(newValue)} // returns array of strings
        filterSelectedOptions // hides already selected
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={{
              backgroundColor: selected ? "#e0f7fa" : "transparent",
              fontWeight: selected ? 600 : 400,
            }}
          >
            {option}
          </li>
        )}
        renderTags={(selected, getTagProps) =>
          selected.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option}
              label={option}
              size="small"
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Pick All Required Skills" placeholder="Required Skills" />
        )}
      />
    </Stack>
  );
}
