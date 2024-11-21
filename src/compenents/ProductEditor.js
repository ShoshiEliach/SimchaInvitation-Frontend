// import React, { useState, useEffect, useRef } from 'react';
// import { fabric } from 'fabric';

// const Pro = () => {
//     const [imageUrl, setImageUrl] = useState(null);
//     const canvasRef = useRef(null);

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const url = URL.createObjectURL(file);
//             setImageUrl(url);
//         }
//     };

//     useEffect(() => {
//         if (imageUrl) {
//             const canvas = new fabric.Canvas(canvasRef.current);
//             fabric.Image.fromURL(imageUrl, (img) => {
//                 img.scaleToWidth(canvas.width);
//                 img.scaleToHeight(canvas.height);
//                 canvas.add(img);
//                 canvas.renderAll();
//             });
//         }
//     }, [imageUrl]);

//     const addText = () => {
//         const canvas = new fabric.Canvas(canvasRef.current);
//         const text = new fabric.Textbox('הכנס טקסט', {
//             left: 100,
//             top: 100,
//             width: 200,
//             fontSize: 30,
//         });
//         canvas.add(text);
//     };

//     return (
//         <div>
//             <input type="file" accept="image/*" onChange={handleImageUpload} />
//             {imageUrl && <canvas ref={canvasRef} width={800} height={600} />}
//             <button onClick={addText}>הוסף טקסט</button>
//         </div>
//     );
// };

// export default ImageEditor;
