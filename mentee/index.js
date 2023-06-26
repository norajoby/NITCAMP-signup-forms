firebase.initializeApp({
    apiKey: "AIzaSyDYeGXqwa4Cqlj8mDqt8Gn5dy4v88EhjQc",
    authDomain: "mentor-sign-up-fb7a0.firebaseapp.com",
    databaseURL: "https://mentor-sign-up-fb7a0-default-rtdb.firebaseio.com",
    projectId: "mentor-sign-up-fb7a0",
    storageBucket: "mentor-sign-up-fb7a0.appspot.com",
    messagingSenderId: "775015643970",
    appId: "1:775015643970:web:88b0893c8c37a88de1a6db"
});
var ismentor = false;
const departments  = ["Architecture", "Biotechnology", "Chemical Engineering", "Civil Engineering", "Computer Science and Engineering", "Electrical and Electronics Engineering", "Electronics and Communication Engineering", "Engineering Physics", "Mathematics", "Mechanical Engineering", "Nanoscience and Technology", "Production Engineering", "Management Studies", "Others"];
const broadAreas   = ["Admission Prep - SOP(In India)", "Admission Prep - SOP(Outside India)", "Civil services in India", "Core engineering paths (leading into narrow areas of expertise)", "Course/electives selection", "Exam Prep - CAT, Others(In India)", "Exam Prep - GMAT, GRE, Others(Outside India)", /* "Exam Prep - GRE, GMAT, TOEFL, Others", */ "Finding Jobs/Internships", "In-school projects", "Non-engineering career paths/success stories", "Professional ( MBA in India)", "Professional ( MBA outside India)", "Professional (Masters in India)", "Professional (Masters outside India)", "Research (Masters/Ph.D in India)", "Research (Masters/Ph.D outside India)", "Resume/Interview Prep", "Startups/Entrepreneurship", "Technical skills training (eg: industry best practices, coding skills etc.)", "other"];
const _broadAreas  = ["Admission_Prep___SOP_In_India", "Admission_Prep___SOP_outside_India", "Civil_services_in_India", "Core_engineering_paths__leading_into_narrow_areas_of_expertise_", "Course_electives_selection", "Exam_Prep___CAT__Others_In_India", "Exam_Prep___GMAT__GRE__Others_Outside_India", /* "Exam_Prep___GRE__GMAT__TOEFL__Others", */ "Finding_Jobs_Internships", "In_school_projects", "Non_engineering_career_paths_success_stories", "Professional_MBA_in_India", "Professional_MBA_outside_India", "Professional__Masters_in_India", "Professional__Masters_outside_India", "Research__Masters_Ph_D_in_India", "Research__Masters_Ph_D_outside_India", "Resume_Interview_Prep", "Startups_Entrepreneurship", "Technical_skills_training__eg__industry_best_practices__coding_skills_etc__", "other"];
const NarrowAreas  = ["Aerospace Structures/Aerodynamics", "Algebra", "Analog and Mixed Signal", "Applied Statistics", "Artificial Intelligence, Machine Learning, Data Science", "Autonomous Driving", "Behavioral Economics", "Biochemistry", "Bioengineering", "Bioethics", "Bioinspired Materials and Systems", "Biomaterials and biophysics", "Biomedical Imaging, Sensing and Genomic Signal Processing", "Biophysics", "Building Science/Technology", "Business Analytics", "Calculus and analysis", "Catalysis", "Clean energy", "Climate change and sustainability", "Cloud Computing, Big data, Distributed systems", "Coastal/Ocean Engineering", "Combinatorics", "Communication", "Computational mechanics", "Computational physics and numerical methods", "Computer Architecture, Operating Systems", "Computer networks, security", "Construction management", "Construction Methods/Materials", "Construction Science/Technology", "Critical History", "Cryptography", "Data Science & Analytics", "Data Science/Analytics", "Design Theory", "Device Science and Nanotechnology", "Digital Signal Processing", "Digital VLSI", "Dynamical systems and differential equations", "Earthquake engineering", "Electrochemistry", "Electromagnetics and Microwaves", "Electronic, Magnetic and Photonic Materials", "Electronics & Photonics", "Embedded Systems", "Energy and Power, Power Electronics", "Energy Management", "Energy Production and Storage", "Enviromental engineering", "Environmental Science", "Enzymology", "Fluid Mechanics", "Fluid mechanics and machinery", "Game theory", "Genetically modified food", "geographic information systems (GIS)", "Geology", "Geometry and topology", "Geophysics", "Geotechnical engineering", "Gerontology", "Green Technologies", "Historic Conservation/Preservation", "Hydraulics", "Industrial Design", "Industrial Engineering", "Information Science and Systems", "Information theory and signal processing", "Interdisciplinary physics and engineering", "Liquids and soft matter", "Logic", "Machine design", "Machine Learning for Biophysics", "Machine Learning for Polymer Science", "Machine Learning for Process Control", "Manufacturing/Production Engineering", "Marine engineering and merchant shipping", "Materials for energy", "Materials Science", "Materials/Pavements", "Mathematical physics", "Mechatronics and robotics", "Membranes and Separations", "Microscopy and advanced imaging", "Molecular Simulations", "Nanobiotechnology", "Nanoscale science and technology", "Nanotechnology", "Number theory", "Numerical Methods", "Operations Engineering & Management", "Operations research", "Operations Research & Optimization", "Optimization", "Organization Development & Change Management", "Petroleum/ Oil & Gas/ Petrochemical/ Mining engineering", "Pharmacology", "Photonics, optoelectronics and device physics", "Polymer Science", "Power Generation and Transmission", "Probability and statistics", "Process Control", "Product Design", "Quality & Reliability Engineering", "Quantum computation and information", "Quantum Mechanics", "Reaction Engineering", "Safety Engineering", "Signals and Systems", "Soil mechanics and Foundation Engineering", "Startups", "Statistical Mechanics", "Stem cell therapy", "Structural Dynamics", "Structural Engineering", "Supply Chain Management", "Surface Science", "Systems Engineering", "Systems Simulation", "Theory of computation", "Therrmal Engineering", "Tissue engineering", "Transportation and Mobility", "Transportation Engineering", "Tunnel Engineering", "Ultrafast physics", "Urban Planning", "Urban Planning/Design", "Water Resources Engineering", "Finance", "Marketing", "Strategy", "Operations", "Human Resources(HR)","Management Consulting", "Product Management", "Project Management", "Startups/Small Business", "Non-profits"];
const _NarrowAreas = ["Aerospace_Structures_Aerodynamics", "Algebra", "Analog_and_Mixed_Signal", "Applied_Statistics", "Artificial_Intelligence__Machine_Learning__Data_Science", "Autonomous_Driving", "Behavioral_Economics", "Biochemistry", "Bioengineering", "Bioethics", "Bioinspired_Materials_and_Systems", "Biomaterials_and_biophysics", "Biomedical_Imaging__Sensing_and_Genomic_Signal_Processing", "Biophysics", "Building_Science_Technology", "Business_Analytics", "Calculus_and_analysis", "Catalysis", "Clean_energy", "Climate_change_and_sustainability", "Cloud_Computing__Big_data__Distributed_systems", "Coastal_Ocean_Engineering", "Combinatorics", "Communication", "Computational_mechanics", "Computational_physics_and_numerical_methods", "Computer_Architecture__Operating_Systems", "Computer_networks__security", "Construction_management", "Construction_Methods_Materials", "Construction_Science_Technology", "Critical_History", "Cryptography", "Data_Science___Analytics", "Data_Science_Analytics", "Design_Theory", "Device_Science_and_Nanotechnology", "Digital_Signal_Processing", "Digital_VLSI", "Dynamical_systems_and_differential_equations", "Earthquake_engineering", "Electrochemistry", "Electromagnetics_and_Microwaves", "Electronic__Magnetic_and_Photonic_Materials", "Electronics___Photonics", "Embedded_Systems", "Energy_and_Power__Power_Electronics", "Energy_Management", "Energy_Production_and_Storage", "Enviromental_engineering", "Environmental_Science", "Enzymology", "Fluid_Mechanics", "Fluid_mechanics_and_machinery", "Game_theory", "Genetically_modified_food", "geographic_information_systems__GIS_", "Geology", "Geometry_and_topology", "Geophysics", "Geotechnical_engineering", "Gerontology", "Green_Technologies", "Historic_Conservation_Preservation", "Hydraulics", "Industrial_Design", "Industrial_Engineering", "Information_Science_and_Systems", "Information_theory_and_signal_processing", "Interdisciplinary_physics_and_engineering", "Liquids_and_soft_matter", "Logic", "Machine_design", "Machine_Learning_for_Biophysics", "Machine_Learning_for_Polymer_Science", "Machine_Learning_for_Process_Control", "Manufacturing_Production_Engineering", "Marine_engineering_and_merchant_shipping", "Materials_for_energy", "Materials_Science", "Materials_Pavements", "Mathematical_physics", "Mechatronics_and_robotics", "Membranes_and_Separations", "Microscopy_and_advanced_imaging", "Molecular_Simulations", "Nanobiotechnology", "Nanoscale_science_and_technology", "Nanotechnology", "Number_theory", "Numerical_Methods", "Operations_Engineering___Management", "Operations_research", "Operations_Research___Optimization", "Optimization", "Organization_Development___Change_Management", "Petroleum__Oil___Gas__Petrochemical__Mining_engineering", "Pharmacology", "Photonics__optoelectronics_and_device_physics", "Polymer_Science", "Power_Generation_and_Transmission", "Probability_and_statistics", "Process_Control", "Product_Design", "Quality___Reliability_Engineering", "Quantum_computation_and_information", "Quantum_Mechanics", "Reaction_Engineering", "Safety_Engineering", "Signals_and_Systems", "Soil_mechanics_and_Foundation_Engineering", "Startups", "Statistical_Mechanics", "Stem_cell_therapy", "Structural_Dynamics", "Structural_Engineering", "Supply_Chain_Management", "Surface_Science", "Systems_Engineering", "Systems_Simulation", "Theory_of_computation", "Therrmal_Engineering", "Tissue_engineering", "Transportation_and_Mobility", "Transportation_Engineering", "Tunnel_Engineering", "Ultrafast_physics", "Urban_Planning", "Urban_Planning_Design", "Water_Resources_Engineering", "Finance", "Marketing", "Strategy", "Operations", "Human Resources(HR)","Management_Consulting", "Product_Management", "Project_Management", "Startups_Small_Business", "Non_profits"];
const _Brach_rel   = ['Civil Engg', 'Mathematics', 'CSE EEE ECE', 'Civil Engg', 'CSE EEE ECE', 'CSE EEE ECE', 'Mech Engg, Prod Engg', 'Chemical Engg', 'Chemical Engg', 'Biotechnology', 'Material Science', 'Engg Phy', 'CSE EEE ECE', 'Chemical Engg', 'Architecture', 'Mech Engg, Prod Engg', 'Mathematics', 'Chemical Engg', 'Mech Engg, Prod Engg', 'Miscellaneous topics', 'CSE EEE ECE', 'Civil Engg', 'Mathematics', 'CSE EEE ECE', 'Civil Engg', 'Engg Phy', 'CSE EEE ECE', 'CSE EEE ECE', 'Civil Engg', 'Architecture', 'Architecture', 'Architecture', 'CSE EEE ECE', 'Mech Engg, Prod Engg', 'Civil Engg', 'Architecture', 'CSE EEE ECE', 'CSE EEE ECE', 'CSE EEE ECE', 'Mathematics', 'Civil Engg', 'Chemical Engg', 'CSE EEE ECE', 'Chemical Engg', 'Material Science', 'CSE EEE ECE', 'CSE EEE ECE', 'Mech Engg, Prod Engg', 'Material Science', 'Civil Engg', 'Chemical Engg', 'Biotechnology', 'Chemical Engg', 'Mech Engg, Prod Engg', 'Mathematics', 'Biotechnology', 'Civil Engg', 'Civil Engg', 'Mathematics', 'Engg Phy', 'Civil Engg', 'Biotechnology', 'Material Science', 'Architecture', 'Civil Engg', 'Architecture', 'Mech Engg, Prod Engg', 'CSE EEE ECE', 'Mathematics', 'Engg Phy', 'Engg Phy', 'Mathematics', 'Mech Engg, Prod Engg', 'Chemical Engg', 'Chemical Engg', 'Chemical Engg', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Engg Phy', 'Chemical Engg', 'Civil Engg', 'Mathematics', 'Mech Engg, Prod Engg', 'Chemical Engg', 'Engg Phy', 'Chemical Engg', 'Biotechnology', 'Engg Phy', 'CSE EEE ECE', 'Mathematics', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Mech Engg, Prod Engg', 'Biotechnology', 'Engg Phy', 'Chemical Engg', 'CSE EEE ECE', 'Mathematics', 'Chemical Engg', 'Architecture', 'Mech Engg, Prod Engg', 'Engg Phy', 'Chemical Engg', 'Chemical Engg', 'Civil Engg', 'CSE EEE ECE', 'Civil Engg', 'Miscellaneous topics', 'Chemical Engg', 'Biotechnology', 'Civil Engg', 'Civil Engg', 'Mech Engg, Prod Engg', 'Chemical Engg', 'Civil Engg', 'Mech Engg, Prod Engg', 'Mathematics', 'Mech Engg, Prod Engg', 'Biotechnology', 'Mech Engg, Prod Engg', 'Civil Engg', 'Civil Engg', 'Engg Phy', 'Architecture', 'Architecture', 'Civil Engg', 'Management', 'Management', 'Management', 'Management', 'Management', 'Management', 'Management', 'Management', 'Management'];
for (var i = 0; i < _Brach_rel.length; i++) {
    for (var j = i; j < _Brach_rel.length; j++) {
        if (_Brach_rel[j] < _Brach_rel[i]) {
            [_Brach_rel[i], _Brach_rel[j]] = swamp(_Brach_rel[i], _Brach_rel[j]);
            [NarrowAreas[i], NarrowAreas[j]] = swamp(NarrowAreas[i], NarrowAreas[j]);
            [_NarrowAreas[i], _NarrowAreas[j]] = swamp(_NarrowAreas[i], _NarrowAreas[j]);
        }
    }
}

function swamp(a, b) {
    return [b, a];
}
const App = {
    init() {
        this.app = document.getElementById("app");
    },
    sethtml(_html) {
        this.app.innerHTML = _html;
    }
}
App.init();

function setmentor(bo) {
    ismentor = bo;
}

function StartB() {
    App.sethtml(`
    <div class="dfc">
        <div class="introbox">
            <h2>Mentee/Mentor Sign-up NITCAA <br> Mentoring Program (NITCAMP) 2022-23</h2>
            <br><br><h3><center>Fill as <center></h3><br>
            <div class="dfc">
                <button onclick="Begin(false)">Mentee</button>
                <button onclick="Begin(true)">Mentor</button>
            </div>
        </div>
    </div>
    `);
    Begin(false);
}

function Begin(bo) {
    setmentor(bo);
    App.sethtml(`
    <div class="dfc">
        <div class="introbox">
            <h2>Alumni/Mentor Sign-up for NITC Alumni <br> Mentoring Program (NITCAMP) 2022-23</h2>
            <br>- All NITC/RECC alumni are welcome to fill this form. 
            <br>- This form will take no more than 2 minutes to complete. 
            <br>- We thank you for your time!
            <br>- We don't sell your personal data to advertisers and we use the information which was shared by you only for the purpose of this mentoring program.
            <br>- This program providesfequal opportunity for all those who register and does not discriminate based on gender, religion, caste, language or nationality.
            <br>- If you have questions or would like to know more about NITCAMP, send an email to <a href="mailto:nitcaa.mentoring@gmail.com">nitcaa.mentoring@gmail.com</a> .
            <div class="dfc">
                <button onclick="StartB()">Back</button>
                <button onclick="NamePage()">Continue</button>
            </div>
        </div>
    </div>
    `);


    // <br>- This program providese equal opportunity for all those who register and does not discriminate based on gender, religion, caste, language or nationality.

    
    if (!bo) {
        App.sethtml(`
        <div class="dfc" style="justify-content:center;">
            <div class="introbox" style="max-width:90%;">
                <h2>Mentee Sign-up NITCAA <br> Mentoring Program (NITCAMP) 2022-23</h2>
                <br>- All current NITC students are welcome to fill this form.
                <br>- This form will take no more than 2 minutes to complete.
                <br>- Please note that filling this form does not assure a mentor. We have a limited number of mentors and we will try to match you with a mentor according to your preferences. Thank you for your interest!
                <br>- Please open the <a href="https://docs.google.com/spreadsheets/d/1q46YCntdE9mK48Kgfk1uiYhrIjbs2hzPoz6pLO1ZS7k/edit?usp=sharing" target="_blank">mentor profiles</a> in a new tab, and keep it open for reference as you fill the form. It will be useful when you select your mentors. Make sure that you select mentors that match your areas of interest.
                <br>- We don't sell your personal data to advertisers and we use the information which was shared by you only for the purpose of this mentoring program.
                <br>- If you have questions or would like to know more about NITCAMP, send an email to nitcaa.mentoring@gmail.com.
                <div class="dfc">
                    <button onclick="StartB()">Back</button>
                    <button onclick="NamePage()">Continue</button>
                </div>
            </div>
        </div>
        `);
    }
}

var name = "";
var phno = "";

function validateName() {
    var _pattern = /^[A-Za-z]+([A-Z a-z]+)*$/;
    var _name = document.getElementById('name').value;
    if (!_pattern.test(_name)) {
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    } else {
        SetName();
        return true;
    }
}

function EnableDisable(inputString) {
    var btnSubmit = document.getElementById("Next");

    if (inputString.value.trim() != "") {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

function NamePage() {
    App.sethtml(`
    <div class="dfc">
        <div class="introbox">
            Tell us your name?
            <br>
            <br>
            <input id="name" placeholder="Your Name" value='${name}' onkeyup="EnableDisable(this)">
            <br>
            <br>
            <div class="dfc">
                <button onclick="Begin(false)">Back</button>
                <button id=Next onclick="validateName()" disabled="disabled">Next</button>
            </div>
        </div>
    </div>`);
    EnableDisable({ value: name });
}

var mail = "";
var gra_yr = "";
var roll_no = "";
var max_hold = "";
var phoneInput;


function SetName(bo = false) {
    if (!bo) {
        var _name = document.getElementById("name").value;
        if (!_name || _name == undefined || _name == null || _name.length < 1) {
            console.log("Enter your name.");
            return;
        }
        name = _name;
    }
    var _inject_oth_dept = "";
    var departments_opts = `<option value="select">--select department--</option>`;
    var sel_once = false;
    for (var dept in departments) {
        var sel = false;
        dept = departments[dept];
        if (dept.toLocaleLowerCase() == DEPT.toLowerCase()) {
            sel = true;
            sel_once = true;
        }
        if (dept.toLowerCase() == "others" && DEPT.toLowerCase() != "nil" && !sel_once) {
            _inject_oth_dept = `<input id="others" placeholder="Others" onchange="set_cus_dep()" value=${DEPT}>`;
            sel = true;
        }
        departments_opts += `<option value='${dept}' ${sel?'selected':''}>${dept}</option>`
    }

    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
                Hey <sp>${name}</sp> <br>  
                Enter email id, phone number,programme year of study at NITC/REC,nitc roll number and department.
                <br>
                <br>
                <input id="email" placeholder="Email id" value='${mail}'>
                <br>
                <br>
                <input id="phno" type="tel" placeholder="Phone Number">
                <br>
                <br>
                <select id="_prgm" onchange="set_prgm(this.value)">
                    <option value="B Tech">B Tech</option>
                    <option value="M Tech">M Tech</option>
                    <option value="B Arch">B Arch</option>
                    <option value="M Arch">M Arch</option>
                    <option value="PhD">PhD</option>
                    <option value="MBA">MBA</option>
                    <option value="others">others</option>
                </select>
                <div id="oth__prgm"></div>
                <br>
                <br>
                <input id="grad" placeholder="year of study(1,2,..)" value='${gra_yr}'>
                <br>
                
                
                ${ismentor?`
                <input id="max_hold" placeholder="Number of students you can mentor" value='${max_hold}'>
                <br>
                <br>`:`
                <input id="roll" placeholder="roll number" value='${roll_no}'>
                <br>
                <br>
                <select id="depart" onchange='setoth()'>
                    ${departments_opts}
                </select>
                <br>
                <br>
                <div id="oth">
                    ${_inject_oth_dept}
                </div>
                <br>
                <br>
                `}
                
                Are you the first person in your family to attend college?
                <select id="personfamilycollege" onchange="set_personfamilycollege(this.value)" required>
                    <option value="" disabled selected>Select your option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br>
                <br>

                Does either of your parents have a college/university degree?
                <select id="parentfamilycollege" onchange="set_parentfamilycollege(this.value)" required>
                    <option value="" disabled selected>Select your option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>

                <br>
                <br>


                <div class="dfc">
                    <button onclick="NamePage()">Back</button>
                    <button onclick="broadArea()">Next</button>
                </div>

            </div>
        </div>`);

        var phoneInputField = document.getElementById("phno");
        phoneInput = window.intlTelInput(phoneInputField, {
            initialCountry:"in",
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        if(phno.length>10){
            phoneInput.setNumber(phno);
            phoneInputField.value=extractph(phno)[1];
        }
}
var __prgm="B Tech";
function set_prgm(val,check=true){
    __prgm=val;
    if(check){
        var oth__prgm=document.getElementById("oth__prgm");
        oth__prgm.innerHTML="";
        if(val=="others"){
            oth__prgm.innerHTML=`<input type="text" onkeyup="set_prgm(this.value,false)" placeholder="programme">`;
        }
    }
}

var set_personfamilycollege_val = 'empty'
function set_personfamilycollege(val,check=true){
    set_personfamilycollege_val = val;
}

var set_parentfamilycollege_val = 'empty'
function set_parentfamilycollege(val,check=true){
    set_parentfamilycollege_val = val;
}

function _Search(val){
    if(!val){
        return;
    }
    val=val.value;
    var avail_opts="";
    if(val.length==0){
        for(var men in MENTORS){
            var _mentor=MENTORS[men];
            avail_opts+=`<div class="dfc dd"> <div style="flex-grow:1;">${_mentor.name}</div><div style="display:flex;justify-content:center;"><button onclick='ChanageSel(${men},this)'><i class="fa fa-${selarray.includes(Number(men))?"minus":"plus"}" aria-hidden="true"></i></button><button><i class="fa fa-eye" aria-hidden="true" onclick="view(${men})"></i></button></div> </div>`;
        }
    }
    else{
        val=val.toLowerCase();
        for(var men in MENTORS){
            var _mentor=MENTORS[men];
            if(!_mentor.broad_area?.toLowerCase().includes(val) && !_mentor.board_area?.toLowerCase().includes(val) && !_mentor.name.toLowerCase().includes(val) && !_mentor.narrow_area.toLowerCase().includes(val))
                continue;
            avail_opts+=`<div class="dfc dd"> <div style="flex-grow:1;">${_mentor.name}</div><div style="display:flex;justify-content:center;"><button onclick='ChanageSel(${men},this)'><i class="fa fa-${selarray.includes(Number(men))?"minus":"plus"}" aria-hidden="true"></i></button><button><i class="fa fa-eye" aria-hidden="true" onclick="view(${men})"></i></button></div> </div>`;
        }
    }
    document.getElementById("avail_opts").innerHTML=avail_opts;
}

function view_ments(){
    _Search(false);
    document.getElementById("abs_selmen").style.zIndex=1;
    document.getElementById("abs_selmen").style.opacity=1;
}
function extractph(_phno){
    if(_phno.length<10){
        return ["",""];
    }
    return [_phno.slice(0,_phno.length-10) , _phno.slice(_phno.length-10,_phno.length)]
}
var DEPT = "nil";
var MENTORS=[];
function SetMandP(bo = false) {
    if(!bo){
        var _tempbo=true;
        for(j in narrow_json){
            if(narrow_json[j])
                _tempbo=false;
        }
        if(_tempbo)
            return;
    }
    if(!ismentor){    
        var values=selarray;
        var _html="";
        if(values.length!=0)
            for(var i=0;i<values.length;i++){
                _html+=`<div class="dfc dd"> <div style="flex-grow:1;">${(i+1)+'. '+MENTORS[values[i]].name}</div><div style="display:flex;justify-content:center;" class="obtns">${i==0?"":`<button onclick=MoveUp(${i})><i class="fa fa-arrow-up" aria-hidden="true"></i></button>`}<button><i class="fa fa-eye" aria-hidden="true" onclick="view(${values[i]})"></i></button></div> </div>`;
            }
        App.sethtml(`
        <div class="dfc">
            <div class="introbox">
            Loading...
            </div>
        </div>
        `);
        var avail_opts="";
        for(var men in MENTORS){
            var _mentor=MENTORS[men];
            console.log(selarray.includes(men),men);
            avail_opts+=`<div class="dfc dd"> <div style="flex-grow:1;">${_mentor.name}</div><div style="display:flex;justify-content:center;"><button onclick='ChanageSel(${men},this)'><i class="fa fa-${selarray.includes(Number(men))?"minus":"plus"}" aria-hidden="true"></i></button><button><i class="fa fa-eye" aria-hidden="true" onclick="view(${men})"></i></button></div> </div>`;
        }
        App.sethtml(`
            <div class="dfc">
                <div class="introbox">
                Mentor Selection (Add upto 5 mentors in order of your preference). 
                <br>- Please open the <a href="https://docs.google.com/spreadsheets/d/1q46YCntdE9mK48Kgfk1uiYhrIjbs2hzPoz6pLO1ZS7k/edit?usp=sharing" target="_blank">mentor profiles</a> in a new tab, and keep it open for reference when you select your mentors. 
                <br>- Make sure that you select mentors that match your areas of interest. 
                <br>- It is recommended to open the sheet on a computer screen rather than a cell phone screen.
                <br>- Click on the "eye symbol" to view the mentor's profile, and click on "+" to select a mentor.
                <br>- When you have completed selections, scroll to the bottom of the page and click "Done".
                <br>
                <div id="sel_men">
                ${_html}
                </div>
                <button onclick="view_ments()">Edit selections</button>
                <div id="abs_selmen">
                    <input placeholder="search" onkeyup='_Search(this)' type="text">
                    <div id="avail_opts">
                        ${avail_opts}
                    </div>
                    <button onclick="SetMandP(true)">Done</button>
                </div>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="NarrowArea(true)">Back</button>
                    <button onclick="OthArea()">Next</button>
                </div>
                </div>
            </div>
        `);
    return;
    }
    var departments_opts = `<option value="select">--select--</option>`;
    for (var dept in departments) {
        var sel = false;
        dept = departments[dept];
        if (dept == DEPT)
            sel = true;
        departments_opts += `<option value='${dept}' ${sel?'selected':''}>${dept}</option>`
    }
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
                So <sp>${name.split(" ")[0]}</sp>.
                <br>
                Tell us your department.
                <br>
                <br>
                <select id="depart" onchange='setoth()'>
                    ${departments_opts}
                </select>
                <br>
                <br>
                <div id="oth">
                </div>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="SetName(true)">Back</button>
                    <button onclick="broadArea()">Next</button>
                </div>
            </div>
        </div>
    `);
}

var selarray=[];
var sp_btns=[];
var other_broad="other";
function ChanageSel(index,btn){
    var _selarray=[];
    var _sp_btns=[];
    var _changed=false;
    for(var i=0;i<selarray.length;i++){
        if(selarray[i]==index){
            _changed=true;
            btn.innerHTML=`<i class="fa fa-plus" aria-hidden="true"></i>`;
        }
        else{
            _selarray.push(selarray[i]);
            _sp_btns.push(sp_btns[i]);
        }
    }
    if(_changed){
        selarray=_selarray;
        sp_btns=_sp_btns;
    }
    else{
        selarray.push(index);
        sp_btns.push(btn);
        btn.innerHTML=`<i class="fa fa-minus" aria-hidden="true"></i>`;
        if(selarray.length>5){
            selarray.shift();
            var _btn=sp_btns.shift();
            _btn.innerHTML=`<i class="fa fa-plus" aria-hidden="true"></i>`;
        }
    }
    console.log(index);
}

function MoveUp(index){
    val=selarray[index];
    selarray[index]=selarray[index-1];
    selarray[index-1]=val;
    SetMandP(true);
}

function setoth() {
    var val = document.getElementById("depart").value;
    var _html = "";
    if (val.toLowerCase() == "others") {
        _html = `<input id="others" placeholder="Others" onchange="set_cus_dep()">`;
    }
    document.getElementById("oth").innerHTML = _html;
    DEPT=val;
}

function set_cus_dep() {
    DEPT = document.getElementById("others").value;
}

function init_json(_Areas) {
    var _json = {};
    for (var i in _Areas) {
        _json[_Areas[i]] = false;
    }
    return _json;
}
var broad_json = init_json(_broadAreas);
var narrow_json = init_json(_NarrowAreas);

function change_broad_json(val, index) {
    if(index=="other"){
        if(val.checked){
            document.getElementById("chdiv_other_broad").innerHTML=`<input type='text' value='other' id="cdob_val" onchange="setotherb(this)">`;
        }
        else{
            document.getElementById("chdiv_other_broad").innerHTML="Other";
            other_broad="other";
        }
    }
    broad_json[index] = val.checked;
}
function setotherb(ele){
    other_broad=ele.value;
}
function change_narrow_json(val, index) {
    narrow_json[index] = val.checked;
}

function broadArea(bo = false) {
    if (!bo) {
        var _mail = document.getElementById("email").value;
        var _phno = document.getElementById("phno").value.trim();
        if(_phno.length>10)
            _phno=_phno.slice(_phno.length-10,_phno.length);
        var _gra_yr = document.getElementById("grad").value;
        var t_prgm=document.getElementById("_prgm").value;
        if(document.getElementById("depart").value.toLocaleLowerCase()=="select")
            return;
        var _max_hold=null;
        var _roll_no=null;
        if(!ismentor)
            _roll_no=document.getElementById("roll").value;
        else
            _max_hold=document.getElementById("max_hold").value;
        if (!_mail || _mail == undefined || _mail == null || _mail.length < 1 || _mail.match("@")==null || _mail.match(".")==null) {
            console.log("Enter your Mail.");
            return;
        }
        if (!_phno || _phno == undefined || _phno == null || _phno.length != 10 || _phno.match(/^[0-9]+([0-9]+)*$/)==null) {
            console.log("Enter your Phone Number.");
            return;
        }
        if (!_gra_yr || _gra_yr == undefined || _gra_yr == null || _gra_yr == "0000") {
            console.log("Enter Graduation Year.");
            return;
        }
        if(ismentor && (!_max_hold || _max_hold==undefined || _max_hold==null || _max_hold.match(/^[0-9]+([0-9]+)*$/)==null || _max_hold==0)){
            console.log("Maximum Hold");
            return;
        }
        if (!ismentor && (!_roll_no || _roll_no == undefined || _roll_no == null)) {
            console.log("Roll Number.");
            return;
        }
        if(t_prgm=="others" && (__prgm=="" || __prgm=="B Tech")){
            console.log("Enter Program");
            return;
        }

        if(set_personfamilycollege_val=="empty" || set_parentfamilycollege_val=="empty"){
            console.log("First generation student details missing");
            return;
        }

        mail = _mail;
        phno = "+"+phoneInput.getSelectedCountryData().dialCode+_phno;
        gra_yr = _gra_yr;
        roll_no=_roll_no;
        max_hold=_max_hold;
    }
    var _opts = '';
    for (var i in broadAreas) {
        var _checked = broad_json[_broadAreas[i]];
        if(broadAreas[i]=="other")
            _opts += `
            <div class="dfc dd" style="padding-top:10px">
                <input type="checkbox" onchange="change_broad_json(this,'${_broadAreas[i]}')" ${_checked?'checked':""}> <div id="chdiv_other_broad" style="overflow:hidden">${_checked?`<input type='text' value='${other_broad}' id="cdob_val" onchange="setotherb(this)">`:"Other"}</div>
            </div>`;
        else
            _opts += `
            <div class="dfc dd" style="padding-top:10px">
                <input type="checkbox" onchange="change_broad_json(this,'${_broadAreas[i]}')" ${_checked?'checked':""}> ${broadAreas[i]}
            </div>`;
    }
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
            Choose your broad areas of interest (Please select your options very carefully, as these will be used to assign you mentors with similar expertise). You may select multiple options.
                <br>
                <br>
                ${_opts}
                <br>
                <br>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="SetName(true)">Back</button>
                    <button onclick="NarrowArea()">Next</button>
                </div>
            </div>
        </div>
    `);
}

var broad_data = "";
var narrow_data = "";

function NarrowArea(bo = false) {
    if (!bo) {
        var j = 0;
        var _val = "";
        for (var i in broad_json) {
            if (broad_json[i]) {
                if(broadAreas[j]=="other"){
                    if(other_broad!="other")
                        _val += other_broad;
                }
                else
                    _val += broadAreas[j] + " , ";
            }
            j++;
        }
        broad_data = _val;
        if(broad_data=="")
            return;
    }
    var _opts = '';
    var p_adds = "";
    for (var i in NarrowAreas) {
        var _checked = narrow_json[_NarrowAreas[i]];
        _opts += `
        <div class="dfc dd c">
            <div style="display:flex;width:100%;"><input type="checkbox" onchange="change_narrow_json(this,'${_NarrowAreas[i]}')" ${_checked?'checked':""}> <div style="flex-grow=1">${NarrowAreas[i]}</div></div>
            <div style="opacity=0.8;font-size:0.8rem;">${_Brach_rel[i]}</div>
        </div>`;
        if (_checked) {
            p_adds += `<div class="u_cus_opts"><div class="g1">${NarrowAreas[i]} </div><i class="fa fa-times-circle" onclick='deselect("${_NarrowAreas[i]}")'></i></div>`;
        }
    }
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
            Choose your narrow areas of interest (Please select your options very carefully, as these will be used to assign you mentors with similar interests). You may select multiple options.
                <br>
                <br>
                <div id="cus_add">
                ${p_adds}
                </div>
                <div class="add">
                    <i class="fa fa-plus-circle" aria-hidden="true" onclick="showoptions(true)"></i>
                </div>
                <div id="abs_narrow">
                    <input placeholder="search" onkeyup='Search(this)' type="text">
                    <div id="n_opts">
                        ${_opts}
                    </div>
                    <button onclick="addoptions()">Add</button>
                </div>
                <br>
                <br>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="broadArea(true)">Back</button>
                    <button onclick="SetMandP()">Next</button>
                </div>
            </div>
        </div>
    `);
}

function showoptions(bo) {
    var val = "";
    if (bo) {
        val = "show";
    }
    document.getElementById("abs_narrow").classList = val;
}

function addoptions() {
    var html = "";
    var j = 0;
    for (var i in _NarrowAreas) {
        var data = narrow_json[_NarrowAreas[i]];
        if (data) {
            html += `<div class="u_cus_opts"><div class="g1">${NarrowAreas[j]} </div><i class="fa fa-times-circle" onclick='deselect("${_NarrowAreas[j]}")'></i></div>`;
        }
        j++;
    }
    document.getElementById("cus_add").innerHTML = html;
    showoptions(false);
}

function deselect(i) {
    narrow_json[i] = false;
    addoptions();
}

function Search(val) {
    var val = val.value.toLowerCase();
    var ar = [];
    for (var i in NarrowAreas) {
        var narrowarea = NarrowAreas[i].toLowerCase();
        if (narrowarea.includes(val)) {
            ar.push(i);
        }
    }
    var temphtml = '';
    console.log(ar);
    for (var i = 0; i < ar.length; i++) {
        var index = Number(ar[i]);
        var _checked=narrow_json[_NarrowAreas[index]];
        temphtml +=
        `<div class="dfc dd c">
            <div style="display:flex;width:100%;"><input type="checkbox" onchange="change_narrow_json(this,'${_NarrowAreas[index]}')" ${_checked?'checked':""}> <div style="flex-grow=1">${NarrowAreas[index]}</div></div>
            <div style="opacity=0.8;font-size:0.8rem;">${_Brach_rel[index]}</div>
        </div>`;
    }
    document.getElementById("n_opts").innerHTML = temphtml;
}

var Oth_area_data = "";

function OthArea(bo = false) {
    if (!bo) {
        var j = 0;
        var _val = "";
        for (var i in narrow_json) {
            if (narrow_json[i]) {
                _val += NarrowAreas[j] + " , ";
            }
            j++;
        }
        narrow_data = _val;
    }
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
                <br>
                Please explain what are your expectations from the mentoring program. We will only use the broad and narrow areas of interest to find appropriate mentors for you. However, we may look at your answer to this question, if we need any clarification. Thus, include as much details as possible(Answer is mandatory).
                <br>
                <br>
                <input id="oth_area_data" type="text" placeholder="your answer" value='${Oth_area_data}'>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="NarrowArea(true)">Back</button>
                    ${ismentor?
                        `<button onclick="LinkdinData()">Next/Skip</button>`
                        :`<button onclick="r_page()">Next</button>`}
                </div>
            </div>
        </div>
    `);

}

var oth_links = "";

function LinkdinData(bo = false) {
    if (!bo)
        Oth_area_data = document.getElementById("oth_area_data").value;
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
                Your LinkedIn Profile/Portfolio/Professional Website
                <br>
                <br>
                Please add the link to any of the above. Please note that providing this link will make it easy for students to look you up and find whether they would like to receive mentoring from you.
                <br>
                <br>
                <input id="oth_links" type="text" placeholder="your answer" value='${oth_links=="not given"?"":oth_links}'>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="OthArea(true)">Back</button>
                    <button onclick="Other_ans()">Next/Skip</button>
                </div>
            </div>
        </div>
    `);
}

function Other_ans(def=false) {
    if(!def){
        oth_links = document.getElementById("oth_links").value;
        if (oth_links.length < 1) {
            oth_links="not given";
        }
    }
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
            Any additional details about you that you want to share with mentees? (e.g., Where do you work? Is there any specific topic that you would like to help the mentee with?)
                <br>
                <br>
                <input id="oth_details" type="text" placeholder="your answer" value='${oth_details=="not given"?"":oth_details}'>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="OthArea(true)">Back</button>
                    <button onclick="r_page()">Review</button>
                </div>
            </div>
        </div>
    `);
}
var oth_details="";
function getmentor(_i){
    if(selarray.length<=_i)
        return "not selected";
    return MENTORS[selarray[_i]].name || "not selected";
}
function r_page(){
    var oth_details=document.getElementById("oth_area_data").value;
    if(oth_details.length<1)
        return;
    Oth_area_data=oth_details;
    mentors_in_order="1 - "+ getmentor(0) +" , "
                    +"2 - "+ getmentor(1) +" , "
                    +"3 - "+ getmentor(2) +" , "
                    +"4 - "+ getmentor(3) +" , "
                    +"5 - "+ getmentor(4) +" ";
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
                <h2>Review</h2>
                <div class="grid-container">
                    <div class="grid-item r">Name</div>
                    <div class="grid-item">${name}</div>
                    <div class="grid-item r">Email id</div>
                    <div class="grid-item">${mail}</div>
                    <div class="grid-item r">Phone Number</div>
                    <div class="grid-item">${phno}</div>
                    <div class="grid-item r">Year of study</div>
                    <div class="grid-item">${gra_yr}</div>
                    <div class="grid-item r">Department</div>
                    <div class="grid-item">${DEPT}</div>
                    <div class="grid-item r">Roll Number</div>
                    <div class="grid-item">${roll_no}</div>

                    <div class="grid-item r">Are you the first person in your family to attend college?</div>
                    <div class="grid-item">${set_personfamilycollege_val}</div>

                    <div class="grid-item r">Does either of your parents have a college/university degree?</div>
                    <div class="grid-item">${set_parentfamilycollege_val}</div>


                    <div class="grid-item r">Broad areas of expertise</div>
                    <div class="grid-item">${broad_data}</div>
                    <div class="grid-item r">Narrow areas of expertise</div>
                    <div class="grid-item">${narrow_data}</div>
                    <div class="grid-item r">Mentors Selected</div>
                    <div class="grid-item">${mentors_in_order}</div>
                    <div class="grid-item r">Expectations</div>
                    <div class="grid-item">${oth_details}</div>
                </div>
                <br>
                <br>
                <div class="dfc">
                    <button onclick="OthArea(true)">Back</button>
                    <button onclick="_Submit()">Submit</button>
                </div>
            </div>
        </div>
    `);
}
function Othdatafin(){
    App.sethtml(`
        <div class="dfc">
            <div class="introbox">
                What are your expectations from your mentor and the NITCAMP Program? 
                <br>Answer briefly (50 -100 words). Please do not worry about minor grammatical mistakes. We are here to help, including with improving your communication skills.
                <br>
                <br>
                <input id="oth_details" type="text" placeholder="your answer">
                <br>
                <br>
                What type of mentoring are you interested in?
                <br>
                <br>
                <input type="checkbox" id="oneone"> One on one Mentoring
                <br>
                <input type="checkbox" id="grpmen"> Group mentoring on a social media platform 
                <br>
                <input type="text" placeholder="others , if any" id="mente_op">

                <br>
                <br>
                <div class="dfc">
                    <button onclick="OthArea(true)">Back</button>
                    <button onclick="r_page()">Next</button>
                </div>
            </div>
        </div>
    `);

}
function _Submit() {
    var json = {};
    json["department"]=DEPT;
    json["name"] = name;
    json["email"] = mail;
    json["phno"] = phno;
    json["year_of_study"] = gra_yr;
    json["roll_no"] = roll_no;
    json["broad_areas"]=broad_data;
    json["narrow_areas"]=narrow_data;
    json["other_suggs"] = Oth_area_data;
    json["programme"]=__prgm;
    json["personfamilycollege_val"] = set_personfamilycollege_val;
    json["parentfamilycollege_val"] = set_parentfamilycollege_val;




    _pre_0=MENTORS[selarray[0]]?.name||"not selected";
    _pre_1=MENTORS[selarray[1]]?.name||"not selected";
    _pre_2=MENTORS[selarray[2]]?.name||"not selected";
    _pre_3=MENTORS[selarray[3]]?.name||"not selected";
    _pre_4=MENTORS[selarray[4]]?.name||"not selected";
    json["preferences"]=_pre_0+","+_pre_1+","+_pre_2+","+_pre_3+","+_pre_4;
    console.log(json);
    firebase.database().ref("/mentees/").push(json);
    App.sethtml(`
    <div class="dfc">
        <div class="introbox">
            Thank you ,
            <sp>${name.split(" ")[0]}</sp> for your response.
            <br>
            <br> Data has been entered successfully . In case of any corrections , kindely re-enter the data again by please reloading the page.
            Only the latest entry will be considered.
        </div>
    </div>`);
}

function Submit() {
    var json = {};
    var x_json={};
    json["name"] = name;
    x_json["Name"]=name;
    json["email"] = mail;
    x_json["Email"]=mail;
    json["phno"] = phno;
    x_json["Phone_Number"]=phno;
    json["graduation_year"] = gra_yr;
    json["department"] = DEPT;
    json["broad_area"] = broad_data;
    x_json["Broad_Areas_to_recive_mentoring_in"]=broad_data;
    json["narrow_area"] = narrow_data;
    x_json["Narrow_Areas_to_recive_mentoring_in"]=narrow_data;
    json["other_area"] = Oth_area_data;
    json["linkdin_info"] = oth_links;
    json["other_details"] = oth_details;
    json["maximum_no_of_mentees_can_be_hold"]=max_hold;
    x_json["How_many_mentees_can_hold"]=max_hold;
    firebase.database().ref("/mentors/").push(json);
    //firebase.database().ref("/mentors_x/").push(x_json);
    App.sethtml(`
    <div class="dfc">
        <div class="introbox">
            Thank you ,
            <sp>${name.split(" ")[0]}</sp> for your response.
            <br>
            <br> Data entered successfully. if there are any corrections, you can enter data from the beginning after reloading the page. 
            Last entered details will be considered.
        </div>
    </div>`);
}


firebase.database().ref("/mentors/").once('value',snap=>{
    var _mentors=[];
    snap.forEach((shot)=>{
        _mentors.push(shot.val());
    })
    _mentors=_mentors.sort((a,b)=>{return a.name>b.name?1:-1})
    MENTORS=_mentors;
    StartB();
});

function view(index){
    var _mentor=MENTORS[index];
    var ele=document.getElementById("view");
    ele.style.zIndex=10;
    ele.style.opacity=1;
    ele.innerHTML=
        `<div class="wrap-view">
            <div class="name">${_mentor.name}</div>
            <div class="det">Department : ${_mentor.department}</div>
            <br>
            <div class="det"><b>Broad Areas of Expertise</b></div>
            <div class="det">${_mentor.broad_area}</div>
            <br>
            <div class="det"><b>Narrow Areas of Expertise</b></div>
            <div class="det">${_mentor.narrow_area}</div>
            <br>
            ${_mentor.other_area.length==0?"":`
            <div class="det"><b>OtherAreas of Expertise</b></div>
            <div class="det">${_mentor.other_area}</div>
            <br>`}
         <div class="det" style="display: none;">Email : <a href="mailto:${_mentor.email}">${_mentor.email}</a></div>
            ${_mentor.linkdin_info=="not given"?"":
                `${getlink(_mentor.linkdin_info)=="nil"?
                `<div class="det">LinkedIN ( or check out )${_mentor.linkdin_info}</div>`:
                `<div class="det">LinkedIN : <a href=${getlink(_mentor.linkdin_info)} target="_blank">${_mentor.linkdin_info}</a></div>`}
                `
            }
            <div class="det" style="display: none;" >Phone no : ${_mentor.phno}</div>
            <br>
                <button onclick="closeview()">OK</button>
            <br>
        </div>`;
}
function getlink(_link){
    if(_link.slice(0,8).toLowerCase()=="https://" || _link.slice(0,7).toLowerCase()=="http://")
        return _link;
    if(_link.slice(0,3).toLowerCase()=="www")
        return "https://"+_link;
    if(_link.split(" ").length==1)
        return "https://www."+_link;
    for(i in _link.split(" ")){
        __link=_link.split(" ")[i];
        if(__link.slice(0,8)=="https://" || __link.slice(0,7)=="http://")
            return _link;
        if(__link.slice(0,3).toLowerCase()=="www")
            return "https://"+__link;
    }
    return "nil";
}
function closeview(){
    var ele=document.getElementById("view");
    ele.style.zIndex=-100;
    ele.style.opacity=0;
}