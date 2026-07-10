// ==========================================
// 1. SCIENTIFIC CALCULATOR LOGIC
// ==========================================
let sciDisplay = document.getElementById('sci-display');

function appendValue(val) {
    if (sciDisplay) sciDisplay.value += val;
}

function clearDisplay() {
    if (sciDisplay) sciDisplay.value = '';
}

function deleteLast() {
    if (sciDisplay) sciDisplay.value = sciDisplay.value.slice(0, -1);
}

function calculateResult() {
    if (!sciDisplay) return;
    try {
        // Replace visual symbols with workable JavaScript Math operators before processing evaluation
        let expression = sciDisplay.value
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/\^/g, '**');
        
        let result = eval(expression);
        sciDisplay.value = result !== undefined ? result : '';
    } catch (error) {
        sciDisplay.value = 'Error';
    }
}

// ==========================================
// 2. DIAMETER PAGE FORMULAS
// ==========================================
function calcDiameter() {
    let r = parseFloat(document.getElementById('dia-radius').value);
    if (isNaN(r) || r <= 0) {
        document.getElementById('dia-out').innerText = "Please enter a valid radius.";
        return;
    }
    let d = 2 * r;
    let c = 2 * Math.PI * r;
    document.getElementById('dia-out').innerHTML = `Diameter (d): ${d.toFixed(2)}<br>Circumference (C): ${c.toFixed(2)}`;
}

// ==========================================
// 3. AREA PAGE FORMULAS
// ==========================================
function calcAreaRectangle() {
    let l = parseFloat(document.getElementById('rect-l').value);
    let w = parseFloat(document.getElementById('rect-w').value);
    if(l > 0 && w > 0) document.getElementById('rect-out').innerText = `Area = ${(l * w).toFixed(2)}`;
}
function calcAreaSquare() {
    let s = parseFloat(document.getElementById('sq-s').value);
    if(s > 0) document.getElementById('sq-out').innerText = `Area = ${(s * s).toFixed(2)}`;
}
function calcAreaTriangle() {
    let b = parseFloat(document.getElementById('tri-b').value);
    let h = parseFloat(document.getElementById('tri-h').value);
    if(b > 0 && h > 0) document.getElementById('tri-out').innerText = `Area = ${(0.5 * b * h).toFixed(2)}`;
}
function calcAreaCircle() {
    let r = parseFloat(document.getElementById('circ-r').value);
    if(r > 0) document.getElementById('circ-out').innerText = `Area = ${(Math.PI * r * r).toFixed(2)}`;
}
function calcAreaParallelogram() {
    let b = parseFloat(document.getElementById('para-b').value);
    let h = parseFloat(document.getElementById('para-h').value);
    if(b > 0 && h > 0) document.getElementById('para-out').innerText = `Area = ${(b * h).toFixed(2)}`;
}
function calcAreaTrapezoid() {
    let a = parseFloat(document.getElementById('trap-a').value);
    let b = parseFloat(document.getElementById('trap-b').value);
    let h = parseFloat(document.getElementById('trap-h').value);
    if(a > 0 && b > 0 && h > 0) document.getElementById('trap-out').innerText = `Area = ${(((a + b) / 2) * h).toFixed(2)}`;
}

// ==========================================
// 4. VOLUME PAGE FORMULAS
// ==========================================
function calcVolCube() {
    let s = parseFloat(document.getElementById('vcube-s').value);
    if(s > 0) document.getElementById('vcube-out').innerText = `Volume = ${(s ** 3).toFixed(2)}`;
}
function calcVolCylinder() {
    let r = parseFloat(document.getElementById('vcyl-r').value);
    let h = parseFloat(document.getElementById('vcyl-h').value);
    if(r > 0 && h > 0) document.getElementById('vcyl-out').innerText = `Volume = ${(Math.PI * (r ** 2) * h).toFixed(2)}`;
}
function calcVolCone() {
    let r = parseFloat(document.getElementById('vcone-r').value);
    let h = parseFloat(document.getElementById('vcone-h').value);
    if(r > 0 && h > 0) document.getElementById('vcone-out').innerText = `Volume = ${( (1/3) * Math.PI * (r ** 2) * h).toFixed(2)}`;
}
function calcVolSphere() {
    let r = parseFloat(document.getElementById('vsph-r').value);
    if(r > 0) document.getElementById('vsph-out').innerText = `Volume = ${( (4/3) * Math.PI * (r ** 3)).toFixed(2)}`;
}
function calcVolPrism() {
    let l = parseFloat(document.getElementById('vprism-l').value);
    let w = parseFloat(document.getElementById('vprism-w').value);
    let h = parseFloat(document.getElementById('vprism-h').value);
    if(l > 0 && w > 0 && h > 0) document.getElementById('vprism-out').innerText = `Volume = ${(l * w * h).toFixed(2)}`;
}

// ==========================================
// 5. PERIMETER PAGE FORMULAS
// ==========================================
function calcPeriRectangle() {
    let l = parseFloat(document.getElementById('prect-l').value);
    let w = parseFloat(document.getElementById('prect-w').value);
    if(l > 0 && w > 0) document.getElementById('prect-out').innerText = `Perimeter = ${(2 * (l + w)).toFixed(2)}`;
}
function calcPeriSquare() {
    let s = parseFloat(document.getElementById('psq-s').value);
    if(s > 0) document.getElementById('psq-out').innerText = `Perimeter = ${(4 * s).toFixed(2)}`;
}
function calcPeriTriangle() {
    let a = parseFloat(document.getElementById('ptri-a').value);
    let b = parseFloat(document.getElementById('ptri-b').value);
    let c = parseFloat(document.getElementById('ptri-c').value);
    if(a > 0 && b > 0 && c > 0) document.getElementById('ptri-out').innerText = `Perimeter = ${(a + b + c).toFixed(2)}`;
}
function calcPeriCircle() {
    let r = parseFloat(document.getElementById('pcirc-r').value);
    if(r > 0) document.getElementById('pcirc-out').innerText = `Circumference = ${(2 * Math.PI * r).toFixed(2)}`;
}
function calcPeriParallelogram() {
    let a = parseFloat(document.getElementById('ppara-a').value);
    let b = parseFloat(document.getElementById('ppara-b').value);
    if(a > 0 && b > 0) document.getElementById('ppara-out').innerText = `Perimeter = ${(2 * (a + b)).toFixed(2)}`;
}