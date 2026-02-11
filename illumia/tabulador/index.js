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

const optionsData = {
  "CIERRI DE GESTION": {
    "Confirmar deposito": {
      "MOP": ["Efecty", "PSE", "TDC MasterCard", "Exito"],
      "Inc Dep": [
        "Jugador Ocasional",
        "Sin Recurso Economico",
        "Falta de Tiempo",
        "Cuenta bloqueada por Betsson",
        "Realizar registro por curiosidad",
        "Inconfomidad TyC",
        "Motivos personales",
        "Inconvenientes con MOP"
      ],
      "NDP": [
        "Falta de Tiempo",
        "Motivos personales",
        "Jugador Ocasional",
        "Sin Recurso Economico",
        "Desea dejar apuestas"
      ]
    },
    "Incentiva deposito": {
      "MOP": ["Efecty", "PSE", "TDC MasterCard", "Exito"],
      "Inc Dep": [
        "Jugador Ocasional",
        "Sin Recurso Economico",
        "Falta de Tiempo",
        "Cuenta bloqueada por Betsson",
        "Realizar registro por curiosidad",
        "Inconfomidad TyC",
        "Motivos personales",
        "Inconvenientes con MOP"
      ],
      "NDP": [
        "Falta de Tiempo",
        "Motivos personales",
        "Jugador Ocasional",
        "Sin Recurso Economico",
        "Desea dejar apuestas"
      ]
    },
    "No desea participar": {
      "MOP": ["Efecty", "PSE", "TDC MasterCard", "Exito"],
      "Inc Dep": [
        "Jugador Ocasional",
        "Sin Recurso Economico",
        "Falta de Tiempo",
        "Cuenta bloqueada por Betsson",
        "Realizar registro por curiosidad",
        "Inconfomidad TyC",
        "Motivos personales",
        "Inconvenientes con MOP"
      ],
      "NDP": [
        "Falta de Tiempo",
        "Motivos personales",
        "Jugador Ocasional",
        "Sin Recurso Economico",
        "Desea dejar apuestas"
      ]
    }
  },
  "RELLAMAR": [
    "Volver a llamar",
    "Pide que lo llamen despues",
    "No lo conocen",
    "Cliente cuelga"
  ],
  "NO CONTACT MANUAL": [
    "Tono sin respuesta - manual",
    "Contestador Automatico - manual",
    "Anuncia de telefonia - manual"
  ]
}
// ## VARIÁVEIS DE DADOS - FIM ##


// ## VARIÁVEIS DE ELEMENTOS - INÍCIO ##
const tipoGestionSelect = document.getElementById('tipoGestionSelect');
const resultadoSelect = document.getElementById('resultadoSelect');
const usuarioCrmInput = document.getElementById('usuarioCrm');

const motivosCard = document.getElementById("motivosCard");
const motivoSelect = document.getElementById('motivoSelect');
const subMotivoSelect = document.getElementById('subMotivoSelect');
const botaoEnvio = document.getElementById('botaoEnvio');
// ## VARIÁVEIS DE ELEMENTOS - FIM ##

// ## FUNÇÕES - INÍCIO ##
function initForm(){
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    tipoGestionSelect.innerHTML = getDefaultOption();

    Object.keys(optionsData).forEach(root => {
        tipoGestionSelect.innerHTML += createOptionElement(root);
    });

    resultadoSelect.disabled = true;
    motivosCard.style.display = "none";
    botaoEnvio.style.display = 'none';
    motivoSelect.disabled = true;
    subMotivoSelect.disabled = true;

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

    let isThereMotivo = motivosCard.style.display != 'none';
    let isMotivoEmpty = motivoSelect.value === defaultOptionForSelect || motivoSelect.value.trim() === '';
    if(isThereMotivo && isMotivoEmpty) isValid = false;

    let isSubMotivoEmpty =  subMotivoSelect.value === defaultOptionForSelect || subMotivoSelect.value.trim() === '';
    if(isThereMotivo && !isMotivoEmpty && isSubMotivoEmpty) isValid = false;

    if(isValid){
        botaoEnvio.style.display = 'inline-block';
    }
}
// ## FUNÇÕES - FIM ##


// ## EVENTOS DE MUDANÇAS - INÍCIO ##
tipoGestionSelect.addEventListener('change', function() { 
    motivosCard.style.display="none";

    const selectedType = this.value;

    resultadoSelect.innerHTML = getDefaultOption();

    if (optionsData[selectedType]) {
        const options = optionsData[selectedType];

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
    const selectedType = this.value;

    motivoSelect.innerHTML = getDefaultOption();

    if (optionsData[tipoGestionSelect.value][selectedType]) {
        const options = optionsData[tipoGestionSelect.value][selectedType];

        if (Array.isArray(options)) {
            options.forEach(item => motivoSelect.innerHTML += createOptionElement(item));
        } else {
             Object.keys(options).forEach(root => {
                motivoSelect.innerHTML += createOptionElement(root);
            });
        }

        subMotivoSelect.innerHTML = '';
        subMotivoSelect.disabled = true;
        motivoSelect.disabled = false;
        motivosCard.style.display="block";
    } else {
        motivoSelect.disabled = true;
        motivosCard.style.display="none";
        botaoEnvio.style.display = 'inline-block';
    }

    validateForm();
});

motivoSelect.addEventListener('change', function() {
    const selectedType = this.value;

    subMotivoSelect.innerHTML = getDefaultOption();

    if (optionsData[tipoGestionSelect.value][resultadoSelect.value][selectedType]) {
        const options = optionsData[tipoGestionSelect.value][resultadoSelect.value][selectedType];

        if (Array.isArray(options)) {
            options.forEach(item => subMotivoSelect.innerHTML += createOptionElement(item));
        } else {
             Object.keys(options).forEach(root => {
                subMotivoSelect.innerHTML += createOptionElement(root);
            });
        }

        botaoEnvio.style.display = 'none';
        subMotivoSelect.disabled = false;
    } else {
        subMotivoSelect.disabled = true;
    }

    validateForm();
});

subMotivoSelect.addEventListener('change', function() {
    validateForm();
});

usuarioCrmInput.addEventListener('input', function() {
    localStorage.setItem(userCrmKey, this.value);
});
// ## EVENTOS DE MUDANÇAS - FIM ##

initForm(); //Função de Início
