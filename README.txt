
1.) All data is adding on the CV website dynamically. After you've changed any data in AWS S3 bucket -> next CV website load you will have an updated data
2.) Image need to be stored in both formats: png and webp (next gen format) Explanation: if browser is newer and it knows about a next gen format
it will load it (it has less size and page will load faster) , if not it will load common png;
    Steps to change an image:
    - link to compress image https://compresspng.com/ (need to compress before converting to webp)
    - link to webp converter https://cloudconvert.com/png-to-webp
    - then change both files in AWS S3 bucket
    - !!but you need to keep filenames same (with file extensions as well)
3.) same with your resume.docx file: you need to keep filename same (with extension);
Or if you want to change resume file and change a filename and even its extension, your steps: 
    - upload new file to AWS S3 bucket;
    - download resume.json from AWS S3 bucket and find usages of old filenames and replace for newer ones;
    - download updated resume.json file to AWS S3 bucket;
