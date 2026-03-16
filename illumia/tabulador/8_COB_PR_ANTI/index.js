// ## VARIÁVEIS DE DADOS - INÍCIO ##
const userCrmKey =  'userCrmKey';
const defaultOptionForSelect = 'Seleccionar...';

const styles = `
    :root {
        --primary: #2563eb;
        --success: #059669;
        --warning: #f59e0b;
        --danger: #dc2626;
        --bg: #0f172a; 
        --card-bg: #ffffff;
        --text-main: #1e293b;
        --text-muted: #64748b;
        --accent: #f8fafc;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
        font-family: 'Inter', system-ui, sans-serif;
        background-color: var(--bg);
        color: var(--text-main);
        min-height: 100vh;
        padding: 12px;
    }

    .dashboard {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 16px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .header {
        grid-column: 1 / -1;
        background: linear-gradient(90deg, #1e40af, #3b82f6);
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header h1 { font-size: 1.2rem; }
    .header .meta { font-size: 0.8rem; opacity: 0.9; }

    .data-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 12px;
        align-content: start;
    }

    .action-column {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .sticky-wrapper {
        position: sticky;
        top: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .card {
        background: var(--card-bg);
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .card-title {
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .card-title::before {
        content: '';
        width: 3px;
        height: 14px;
        border-radius: 2px;
    }

    .accent-blue { color: var(--primary); }
    .accent-blue::before { background: var(--primary); }
    .accent-green { color: var(--success); }
    .accent-green::before { background: var(--success); }
    .accent-orange { color: #d97706; }
    .accent-orange::before { background: #d97706; }
    .accent-purple { color: #6d28d9; }
    .accent-purple::before { background: #6d28d9; }

    .info-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }

    .item { display: flex; flex-direction: column; margin-bottom: 4px; }
    .label { font-size: 0.65rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; }
    .value { font-size: 0.85rem; font-weight: 500; }

    .form-field { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
    
    select, input, textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        background: var(--accent);
        font-size: 0.85rem;
        font-family: inherit;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    /* Increased size of textarea */
    textarea { 
        height: 180px; 
        resize: vertical; /* Allows user to make it even bigger if needed */
        min-height: 120px;
    }

    .btn {
        width: 100%;
        padding: 14px;
        border-radius: 8px;
        border: none;
        font-weight: 700;
        cursor: pointer;
        background: var(--primary);
        color: white;
        transition: 0.2s;
        margin-top: 5px;
    }

    .btn:hover { filter: brightness(1.1); transform: translateY(-1px); }

    .tag-pill {
        background: #e0f2fe;
        color: #0369a1;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 600;
    }

    /* Base Header Styles */
    .header {
        grid-column: 1 / -1;
        background: linear-gradient(90deg, #1e40af, #3b82f6);
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap; /* Allows wrapping on small screens */
        gap: 12px;
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 8px; /* Extra space for the top labels */
    }

    .input-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    .input-label {
        position: absolute;
        top: -12px; /* Positioned slightly above the box */
        left: 4px;
        font-size: 0.55rem; /* Very small */
        font-weight: 700;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        letter-spacing: 0.02em;
        pointer-events: none; /* Allows clicks to pass through to the input */
    }

    .header-input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        color: white;
        padding: 2px 8px; 
        font-size: 0.7rem;
        font-weight: 600;
        width: 100px; /* Widened slightly to fit the label above */
        height: 19px;
        text-align: center;
        transition: all 0.2s;
        box-sizing: border-box;
    }

    .header-input::placeholder{
        color: #a7baeb;
    }

    .header-input:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.2);
        border-color: white;
    }

    @media (max-width: 600px) {
        .header {
            flex-direction: column;
            align-items: flex-start; /* Aligns text to the left on mobile */
            padding: 12px;
        }

        .header-right {
            width: 100%;
            justify-content: flex-start;
            margin-top: 4px;
        }
        
        .header h1 {
            font-size: 1.1rem;
            line-height: 1.2;
        }
    }

    @media (max-width: 1024px) {
        .dashboard { grid-template-columns: 1fr; }
        .sticky-wrapper { position: static; }
    }
`;

const typificationOptionsData = {
  "CIERRE DE GESTION": {
    "Compromiso de pago": [],
    "Pago Telefonico": [],
    "Compromiso de pago por fuera de campana": [],
    "No Acepta / Fuera de politica": [],
    "No aplica gestion": [],
    "Retirar de gestion": [
      "Cliente Molesto",
      "Reporta pago",
      "Clienteal dia"
    ],
    "Recordacion compromiso": [],
  },

  "RELLAMAR": [
    "Volver a llamar",
    "Pide que lo llamen despues",
    "No aplica gestion",
    "No lo conocen",
    "Cliente cuelga",
    "Llamada muda"
  ],

  "NO CONTACTO MANUAL": [
    "Tono sin respuesta - manual",
    "Contestador automatico - manual",
    "Anuncia de telefonia - manual",
    "Ocupado - manual",
    "Sin tono de marcacion - manual"
  ]
};

const motivoOptionsData = {
  "CIERRE DE GESTION": {
    "No Acepta / Fuera de politica": {
      "Economicos": [
        "Problema Economico",
        "Desempleado",
        "Aumento Precios"
      ],
      "Facturacion": [
        "No coincide vecimiento de factura con flujo de caja",
        "Novedades em la recepción de la factura",
        "Inconformidad con el valor facturado",
        "Carga y/o baja de paquetes premium"
      ],
      "Personales": [
        "Estaba de viaje",
        "Olvido pagar",
        "Calamidad/Enfermedad/Muerte/Titular Fallecido"
      ],
      "Servicio": [
        "Problemas Tecnicos",
        "No utiliza el Servicio",
        "Pendiente de Cancelacion u oferta de retención",
        "Informacion errada em la venta/servicio",
        "Inconvenientes con el recaudo"
      ],
      "Otros": [
        "Situación extraordinaria",
        "Suscriptor no brinda información",
        "Encargado tercera persona",
        "Solicita cancelacion",
        "Desastre natural",
        "No define fecha de Pago"
      ]
    }
  }
};

const lugarValues = ["MiDirectv", "Sistema automatico", "Efectivo (puntos aliados)", "Banco", "Correo postal", "Cuenta ahorro/Cheque/TC"]

const lugarOptionsData = {
    "CIERRE DE GESTION": {
        "Compromiso de pago": {
            isThereNombreRef: false,
            values: lugarValues
        },
        "Pago Telefonico": {
            isThereNombreRef: false,
            values: []
        },
        "Compromiso de pago por fuera de campana": {
            isThereNombreRef: false,
            values: lugarValues
        }
    }
}
// ## VARIÁVEIS DE DADOS - FIM ##


// ## VARIÁVEIS DE ELEMENTOS - INÍCIO ##
const tipoGestionSelect = document.getElementById('tipoGestionSelect');
const resultadoSelect = document.getElementById('resultadoSelect');
const feedBackSelect = document.getElementById('feedBackSelect');
const motivoSelect = document.getElementById('motivoSelect');
const subMotivoSelect = document.getElementById('subMotivoSelect');
const lugarSelect = document.getElementById('lugarSelect');
const valorInput = document.getElementById('valorInput');
const nombreRefInput = document.getElementById('nombreReferenciaInput');
const usuarioCrmInput = document.getElementById('usuarioCrm');

const feedBackField = document.getElementById("feedBackField");
const lugarField = document.getElementById('lugarField');
const nombreRefField = document.getElementById("nombreReferenciaField");
const motivosCard = document.getElementById("motivosCard");
const convenioCard = document.getElementById("convenioCard");
const botaoEnvio = document.getElementById('botaoEnvio');
// ## VARIÁVEIS DE ELEMENTOS - FIM ##


// ## FUNÇÕES - INÍCIO ##
function loadCss(){
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

function initForm(){
    loadCss();

    tipoGestionSelect.innerHTML = getDefaultOption();

    Object.keys(typificationOptionsData).forEach(root => {
        tipoGestionSelect.innerHTML += createOptionElement(root);
    });

    resultadoSelect.disabled = true;
    feedBackSelect.disabled = true;
    motivoSelect.disabled = true;
    subMotivoSelect.disabled = true;
    lugarSelect.disabled = true;
    feedBackField.style.display = "none";
    motivosCard.style.display = "none";
    convenioCard.style.display = "none";
    validateForm();

    if(localStorage.getItem(userCrmKey) !== null)
    {
        usuarioCrmInput.value = localStorage.getItem(userCrmKey);
    }
};

function getDefaultOption(){
    return `<option disabled selected hidden>${defaultOptionForSelect}</option>`;
}

function createOptionElement(text){
    return `<option>${text}</option>`
}

function validateForm(){
    botaoEnvio.style.display = 'none';

    let isValid = true;

    let isResultadoEmpty = resultadoSelect.value.trim() === '' || resultadoSelect.value === defaultOptionForSelect;
    if(isResultadoEmpty) isValid= false;
    
    let isThereFeedBack = feedBackField.style.display != 'none';
    let isFeedBackEmpty = feedBackSelect.value === defaultOptionForSelect || feedBackSelect.value.trim() === '';
    if(isThereFeedBack && isFeedBackEmpty) isValid = false;

    let isThereMotivo = motivosCard.style.display != 'none';
    let isMotivoEmpty = motivoSelect.value === defaultOptionForSelect || motivoSelect.value.trim() === '';
    if(isThereMotivo && isMotivoEmpty) isValid = false;

    let isSubMotivoEmpty =  subMotivoSelect.value === defaultOptionForSelect || subMotivoSelect.value.trim() === '';
    if(isThereMotivo && !isMotivoEmpty && isSubMotivoEmpty) isValid = false;

    let isThereConvenio = convenioCard.style.display != 'none';
    let isValorEmpty = valorInput.value.trim() === '';
    if(isThereConvenio && isValorEmpty) isValid = false;

    let isThereLugar = lugarField.style.display !='none';
    let isLugarEmpty = lugarSelect.value === defaultOptionForSelect || lugarSelect.value.trim() === '';
    if(isThereConvenio && isThereLugar && !isValorEmpty && isLugarEmpty) isValid = false;

    let isThereNombreRef = nombreRefField.style.display !='none';
    let isNombreRefEmpty = nombreRefInput.value.trim() === '';
    if(isThereConvenio && isThereNombreRef && isNombreRefEmpty) isValid = false;

    if(isValid){
        botaoEnvio.style.display = 'inline-block';
    }
}
// ## FUNÇÕES - FIM ##


// ## EVENTOS DE MUDANÇAS - INÍCIO ##
tipoGestionSelect.addEventListener('change', function() { 
    feedBackField.style.display="none";
    lugarField.style.display="none";
    motivosCard.style.display="none";
    convenioCard.style.display="none";

    const selectedType = this.value;

    resultadoSelect.innerHTML = getDefaultOption();

    if (typificationOptionsData[selectedType]) {
        const options = typificationOptionsData[selectedType];

        if (Array.isArray(options)) {
            options.forEach(item => resultadoSelect.innerHTML += createOptionElement(item));
        } else {
             Object.keys(options).forEach(root => {
                resultadoSelect.innerHTML += createOptionElement(root);
            });
        }

        resultadoSelect.disabled = false;
    } else {
        resultadoSelect.disabled = true;
    }

    validateForm();
});

resultadoSelect.addEventListener('change', function() {
    feedBackField.style.display="none";
    lugarField.style.display="none";
    nombreRefField.style.display="none";
    nombreRefField.value='';
    motivosCard.style.display="none";
    convenioCard.style.display="none";
    lugarSelect.disabled = false;

    const selectedType = this.value;

    let isThereMotivoOption = motivoOptionsData[tipoGestionSelect.value]?.hasOwnProperty(selectedType);

    let isThereFeedBackOption = typificationOptionsData[tipoGestionSelect.value]?.hasOwnProperty(selectedType)
                                && typificationOptionsData[tipoGestionSelect.value][selectedType].length!=0;

    let isThereConvenioOption = lugarOptionsData[tipoGestionSelect.value]?.hasOwnProperty(selectedType);

    if(isThereFeedBackOption){
        const feedBackOptions = typificationOptionsData[tipoGestionSelect.value][selectedType];

        feedBackSelect.innerHTML = getDefaultOption();
        feedBackOptions.forEach(item => feedBackSelect.innerHTML += createOptionElement(item));

        feedBackSelect.disabled = false;
        feedBackField.style.display="flex";
    }else{
        feedBackField.style.display="none";
        feedBackSelect.disabled = true;
    }

    if(isThereConvenioOption){
        const selectedConvenio = lugarOptionsData[tipoGestionSelect.value][selectedType];

        if(selectedConvenio.values.length!=0){  
            lugarField.style.display = "flex";
            lugarSelect.innerHTML = getDefaultOption();
            selectedConvenio.values.forEach(item => lugarSelect.innerHTML += createOptionElement(item));
            lugarSelect.disabled = false;
        }

        if(selectedConvenio.isThereNombreRef){
            nombreRefField.style.display = "flex";
        }

        convenioCard.style.display = "block"
    }

    if(isThereMotivoOption){
        const motivoOptions = motivoOptionsData[tipoGestionSelect.value][selectedType];

        motivoSelect.innerHTML = getDefaultOption();

        if (Array.isArray(motivoOptions)) {
            motivoOptions.forEach(item => motivoSelect.innerHTML += createOptionElement(item));
        } else {
             Object.keys(motivoOptions).forEach(root => {
                motivoSelect.innerHTML += createOptionElement(root);
            });
        }

        subMotivoSelect.innerHTML = '';
        subMotivoSelect.disabled = true;
        motivoSelect.disabled = false;
        motivosCard.style.display="block";
    }else{
        motivoSelect.disabled = true;
        motivosCard.style.display="none";
    }

    validateForm();
});

motivoSelect.addEventListener('change', function() {
    const selectedType = this.value;

    subMotivoSelect.innerHTML = getDefaultOption();

    let isThereSubMotivos = motivoOptionsData[tipoGestionSelect.value][resultadoSelect.value].hasOwnProperty(selectedType)
                            && motivoOptionsData[tipoGestionSelect.value][resultadoSelect.value][selectedType].length!=0;


    if (isThereSubMotivos) {
        const subMotivoOptions = motivoOptionsData[tipoGestionSelect.value][resultadoSelect.value][selectedType];

        if (Array.isArray(subMotivoOptions)) {
            subMotivoOptions.forEach(item => subMotivoSelect.innerHTML += createOptionElement(item));
        } else {
             Object.keys(subMotivoOptions).forEach(root => {
                subMotivoSelect.innerHTML += createOptionElement(root);
            });
        }
        subMotivoSelect.disabled = false;
    } else {
        subMotivoSelect.disabled = true;
    }

    validateForm();
});

feedBackSelect.addEventListener('change', function() {
    validateForm();
});

subMotivoSelect.addEventListener('change', function() {
    validateForm();
});

valorInput.addEventListener('input', function() {
    validateForm();
});

lugarSelect.addEventListener('change', function() {
    validateForm();
});

nombreRefInput.addEventListener('input', function() {
    validateForm();
});

usuarioCrmInput.addEventListener('input', function() {
    localStorage.setItem(userCrmKey, this.value);
});
// ## EVENTOS DE MUDANÇAS - FIM ##


initForm(); //Função de Início