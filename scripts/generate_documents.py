import os
import sys

# Ensure files directory exists
os.makedirs("files", exist_ok=True)

# --------------------------------------------------------------------------
# 1. Generate ise-00-course-insights.pdf
# --------------------------------------------------------------------------
def generate_course_insights():
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors

    pdf_path = os.path.join("files", "ise-00-course-insights.pdf")
    doc = SimpleDocTemplate(pdf_path, pagesize=letter, rightMargin=54, leftMargin=54, topMargin=54, bottomMargin=54)
    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#20202B')
    )
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#7856FF')
    )
    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor('#20202B')
    )

    story = []
    story.append(Paragraph("VIDYALANKAR INSTITUTE OF TECHNOLOGY", subtitle_style))
    story.append(Paragraph("Department of Computer Engineering · Academic Year 2026–27", body_style))
    story.append(Spacer(1, 10))
    story.append(Paragraph("Course Insights & Curriculum Mapping (AAP)", title_style))
    story.append(Paragraph("Course Code: VEC02 · E-Waste & Environmental Management (EWEM) · 2 Credits", subtitle_style))
    story.append(Spacer(1, 12))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#7856FF'), spaceAfter=15))

    p1 = ("<b>1. Executive Summary:</b> This document establishes the foundational baseline for the VEC02 "
          "E-Waste and Environmental Management curriculum. The course is structured as a 2-credit environmental mandate "
          "comprising 30 contact lecture hours, mapped comprehensively across 6 core curriculum buckets.")
    story.append(Paragraph(p1, body_style))
    story.append(Spacer(1, 10))

    # Curriculum Buckets Table
    data = [
        ["Module #", "Curriculum Bucket Title", "Hours", "CO Alignment"],
        ["Module 1", "E-Waste Genesis & Global Quantification Trends", "5 Hrs", "CO1 (Understand)"],
        ["Module 2", "Toxicological Hazards, Heavy Metals & Bioaccumulation", "5 Hrs", "CO2 (Analyze)"],
        ["Module 3", "Recycling Metallurgy: Pyrolysis, Hydrometallurgy & Plasma Arc", "6 Hrs", "CO3 (Apply)"],
        ["Module 4", "Extended Producer Responsibility (EPR) & E-Waste Rules 2022", "5 Hrs", "CO4 (Evaluate)"],
        ["Module 5", "Circular Electronics, Eco-Design & Urban Mining Economics", "5 Hrs", "CO5 (Design)"],
        ["Module 6", "AI in Waste Curation, Logistics & Recommender Pipelines", "4 Hrs", "CO6 (Synthesize)"]
    ]
    t = Table(data, colWidths=[65, 270, 60, 105])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#20202B')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,0), 9),
        ('BOTTOMPADDING', (0,0), (-1,0), 6),
        ('TOPPADDING', (0,0), (-1,0), 6),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E6E0D7')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor('#FFFFFF'), colors.HexColor('#F7F3EA')]),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,1), (-1,-1), 8.5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t)
    story.append(Spacer(1, 15))

    p2 = ("<b>2. Evaluation Architecture:</b> Theory-only evaluation consists of In-Semester Assessments (ISA: 40 Marks) "
          "focusing on empirical state trackers, elemental blueprints, and policy decks, and End-Semester Assessments "
          "(ESE: 60 Marks) culminating in patent concepts, campus activation drives, green building scoring, and IEEE research.")
    story.append(Paragraph(p2, body_style))
    doc.build(story)
    print("Generated:", pdf_path)

# --------------------------------------------------------------------------
# 2. Generate ise-01-mp-report.docx
# --------------------------------------------------------------------------
def generate_mp_report():
    import docx
    from docx.shared import Inches, Pt, RGBColor
    from docx.enum.text import WD_ALIGN_PARAGRAPH
    from docx.enum.table import WD_TABLE_ALIGNMENT

    doc_path = os.path.join("files", "ise-01-mp-report.docx")
    doc = docx.Document()

    # Title
    p_title = doc.add_paragraph()
    r_sub = p_title.add_run("STATE E-WASTE INVENTORY & MATERIAL BALANCE STUDY\n")
    r_sub.font.name = 'Arial'
    r_sub.font.size = Pt(11)
    r_sub.font.bold = True
    r_sub.font.color.rgb = RGBColor(120, 86, 255)

    r_title = p_title.add_run("Madhya Pradesh State E-Waste Management Report\n20-District Quantitative Ledger & Capacity Assessment")
    r_title.font.name = 'Arial'
    r_title.font.size = Pt(20)
    r_title.font.bold = True
    r_title.font.color.rgb = RGBColor(32, 32, 43)

    p_meta = doc.add_paragraph("Author: EWEM Research Group · Course Code: VEC02 · Academic Year 2026–27")
    p_meta.runs[0].font.italic = True
    p_meta.runs[0].font.size = Pt(9.5)
    p_meta.runs[0].font.color.rgb = RGBColor(119, 118, 129)

    doc.add_heading("1. Executive Summary", level=1)
    doc.add_paragraph(
        "This empirical study evaluates the electronic waste generation, collection network, and authorized "
        "recycling capabilities across 20 administrative districts of Madhya Pradesh. Annual generation across "
        "the audited territory totals 43,575 Metric Tonnes per annum, dominated by tier-1 urban hubs including "
        "Indore (12,850 MT) and Bhopal (9,420 MT). State-wide collection efficiency stands at 68%, supported by "
        "175 authorized collection centers."
    )

    doc.add_heading("2. District Breakdown & Generation Ledger", level=1)
    table = doc.add_table(rows=1, cols=5)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    hdr_cells = table.rows[0].cells
    headers = ["District", "Annual Gen (MT)", "Collection Centers", "Efficiency (%)", "Dominant Stream"]
    for i, h in enumerate(headers):
        hdr_cells[i].text = h
        hdr_cells[i].paragraphs[0].runs[0].font.bold = True
        hdr_cells[i].paragraphs[0].runs[0].font.size = Pt(9)

    district_data = [
        ("Indore", "12,850", "42", "74.2%", "Telecom & Computing"),
        ("Bhopal", "9,420", "34", "71.5%", "Consumer Electronics & IT"),
        ("Jabalpur", "4,860", "18", "65.0%", "Consumer White Goods"),
        ("Gwalior", "4,210", "16", "63.8%", "Industrial Electronics"),
        ("Ujjain", "2,980", "12", "61.2%", "Small Household Devices"),
        ("Sagar", "2,150", "10", "59.4%", "Consumer Electronics"),
        ("Dewas", "1,890", "9", "64.1%", "Industrial & PCB Waste"),
        ("Satna", "1,720", "8", "58.0%", "General Electronics"),
        ("Ratlam", "1,650", "8", "62.5%", "Telecom Equipment"),
        ("Rewa", "1,845", "18", "56.8%", "Domestic Appliances")
    ]
    for row in district_data:
        r_cells = table.add_row().cells
        for idx, val in enumerate(row):
            r_cells[idx].text = val
            r_cells[idx].paragraphs[0].runs[0].font.size = Pt(8.5)

    doc.add_heading("3. Material Fraction & Elemental Composition", level=1)
    doc.add_paragraph(
        "Mechanical sorting and characterization of PCB streams reveal an average yield of 280 mg/kg of Gold (Au), "
        "1,250 mg/kg of Silver (Ag), and 14.8% Copper (Cu) by weight. Urban mining initiatives in Indore and Bhopal "
        "present an economic recovery potential exceeding ₹142 Crores annually under closed-loop hydrometallurgical processing."
    )

    doc.save(doc_path)
    print("Generated:", doc_path)

# --------------------------------------------------------------------------
# 3. Generate ise-01-mp-tracker.xlsx
# --------------------------------------------------------------------------
def generate_mp_tracker():
    import openpyxl
    from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

    wb_path = os.path.join("files", "ise-01-mp-tracker.xlsx")
    wb = openpyxl.Workbook()

    # Style templates
    header_fill = PatternFill(start_color="20202B", end_color="20202B", fill_type="solid")
    header_font = Font(name="Arial", size=10, bold=True, color="FFFFFF")
    accent_fill = PatternFill(start_color="F7F3EA", end_color="F7F3EA", fill_type="solid")
    bold_font = Font(name="Arial", size=9, bold=True)
    normal_font = Font(name="Arial", size=9)

    # 1. Executive Summary Sheet
    ws1 = wb.active
    ws1.title = "Executive Summary"
    ws1["A1"] = "MADHYA PRADESH E-WASTE TRACKER // 20-DISTRICT SUMMARY"
    ws1["A1"].font = Font(name="Arial", size=14, bold=True, color="7856FF")
    ws1["A3"] = "Total Annual Generation (MT):"
    ws1["B3"] = 43575
    ws1["A4"] = "Overall Collection Efficiency:"
    ws1["B4"] = "68.2%"
    ws1["A5"] = "Authorized Collection Centers:"
    ws1["B5"] = 175
    ws1["A6"] = "Total Districts Audited:"
    ws1["B6"] = 20
    for row in range(3, 7):
        ws1[f"A{row}"].font = bold_font
        ws1[f"B{row}"].font = bold_font

    # 2. District Generation Sheet
    ws2 = wb.create_sheet("District Generation")
    headers = ["District Name", "Zone", "Annual Gen (MT)", "Collected (MT)", "Collection Rate (%)", "Centers"]
    ws2.append(headers)
    for col in range(1, 7):
        cell = ws2.cell(row=1, column=col)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center")

    districts = [
        ("Indore", "Western", 12850, 9534, "=D2/C2", 42),
        ("Bhopal", "Central", 9420, 6735, "=D3/C3", 34),
        ("Jabalpur", "Eastern", 4860, 3159, "=D4/C4", 18),
        ("Gwalior", "Northern", 4210, 2686, "=D5/C5", 16),
        ("Ujjain", "Western", 2980, 1824, "=D6/C6", 12),
        ("Sagar", "Bundelkhand", 2150, 1277, "=D7/C7", 10),
        ("Dewas", "Western", 1890, 1211, "=D8/C8", 9),
        ("Satna", "Vindhya", 1720, 998, "=D9/C9", 8),
        ("Ratlam", "Western", 1650, 1031, "=D10/C10", 8),
        ("Rewa", "Vindhya", 1845, 1048, "=D11/C11", 18)
    ]
    for d in districts:
        ws2.append(d)

    # Sheets 3 to 7
    sheet_names = ["Collection Centers", "Material Fractions", "Recovered Metal Value", "100-Pt Compliance Scorecard", "Outreach & Drop-offs"]
    for s_name in sheet_names:
        ws = wb.create_sheet(s_name)
        ws["A1"] = f"Madhya Pradesh State Audit — {s_name}"
        ws["A1"].font = Font(name="Arial", size=12, bold=True, color="7856FF")

    wb.save(wb_path)
    print("Generated:", wb_path)

# --------------------------------------------------------------------------
# 4. Generate ise-03-kerala-deck.pdf
# --------------------------------------------------------------------------
def generate_kerala_deck():
    from reportlab.lib.pagesizes import landscape, letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors

    pdf_path = os.path.join("files", "ise-03-kerala-deck.pdf")
    doc = SimpleDocTemplate(pdf_path, pagesize=landscape(letter), rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    styles = getSampleStyleSheet()

    slide_title = ParagraphStyle('SlideTitle', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.HexColor('#20202B'))
    slide_sub = ParagraphStyle('SlideSub', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#7856FF'))
    slide_body = ParagraphStyle('SlideBody', parent=styles['Normal'], fontName='Helvetica', fontSize=10.5, leading=16, textColor=colors.HexColor('#20202B'))

    story = []
    # Slide 1: Cover
    story.append(Spacer(1, 40))
    story.append(Paragraph("KERALA STATE E-WASTE LANDSCAPE & CIRCULARITY", slide_sub))
    story.append(Spacer(1, 10))
    story.append(Paragraph("Regional Material Flow, Formal Capacity Deficits & Circular Roadmaps", slide_title))
    story.append(Spacer(1, 15))
    story.append(Paragraph("13-Slide Comprehensive Analytical Presentation · Course: VEC02 EWEM · AY 2026–27", slide_body))
    story.append(PageBreak())

    # Slide 2: Quantitative Overview
    story.append(Paragraph("SLIDE 02 // MACRO METRICS", slide_sub))
    story.append(Paragraph("State E-Waste Balance Sheet (Annual Baseline)", slide_title))
    story.append(Spacer(1, 15))
    metrics_table = [
        ["Macro Parameter", "Measured Value", "National Benchmark", "Variance Analysis"],
        ["Annual E-Waste Generation", "38,395.84 MT", "68,000 MT (State Avg)", "Lower per-capita hardware waste"],
        ["Material Recovery Efficiency", "75.83%", "54.2% (National Avg)", "+21.6% superior informal dismantling"],
        ["State Collection Rate", "62.60%", "41.8% (CPCB Report)", "High literacy & municipal awareness"],
        ["Authorized Formal Capacity", "8,600.00 MT", "35,000 MT Target", "Critical 77.6% Capacity Gap Deficit"]
    ]
    t = Table(metrics_table, colWidths=[180, 130, 150, 240])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#20202B')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E6E0D7')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F7F3EA')])
    ]))
    story.append(t)
    story.append(Spacer(1, 20))
    story.append(Paragraph("<b>Key Finding:</b> While Kerala achieves an exemplary 75.83% material recovery efficiency, "
                           "over 77.6% of generated volume flows through unauthorized scrap aggregators due to a severe formal capacity deficit.", slide_body))

    doc.build(story)
    print("Generated:", pdf_path)

# --------------------------------------------------------------------------
# 5. Generate ese-04-plasma-arc.pdf
# --------------------------------------------------------------------------
def generate_plasma_arc_patent():
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors

    pdf_path = os.path.join("files", "ese-04-plasma-arc.pdf")
    doc = SimpleDocTemplate(pdf_path, pagesize=letter, rightMargin=54, leftMargin=54, topMargin=54, bottomMargin=54)
    styles = getSampleStyleSheet()

    title_style = ParagraphStyle('PatTitle', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=18, leading=22, textColor=colors.HexColor('#20202B'))
    head_style = ParagraphStyle('PatHead', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#7856FF'))
    body_style = ParagraphStyle('PatBody', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=13.5, textColor=colors.HexColor('#20202B'))

    story = []
    story.append(Paragraph("INDIAN PATENT APPLICATION // DESIGN SPECIFICATION", head_style))
    story.append(Paragraph("Ultra-High Temperature Plasma Arc Reactor for Single-Stage Smelting & Precious Metal Recovery from Printed Circuit Board (PCB) E-Waste", title_style))
    story.append(Spacer(1, 8))
    story.append(Paragraph("<b>Inventors:</b> EWEM Technical Research Group · <b>Filing Ref:</b> 2026/EWEM/PAT-04", body_style))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#20202B'), spaceAfter=12))

    story.append(Paragraph("<b>ABSTRACT</b>", head_style))
    story.append(Paragraph(
        "A thermodynamic reactor system and method for recovering precious and strategic metals (Au, Ag, Cu, Pd, Pt) "
        "from shredded electronic waste PCBs using a non-transferred thermal plasma torch. Operating at thermal core "
        "temperatures between 5,000 °C and 15,000 °C under an argon-nitrogen inert atmosphere, the system prevents dioxin "
        "and furan genesis. Volatilized organics are converted into high-calorific syngas, while base metals and molten "
        "precious metals separate by gravitational density from vitrified, non-leachable silicate slag, achieving >95% recovery yield.",
        body_style
    ))
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>TECHNICAL SPECIFICATIONS & PROCESS PARAMETERS</b>", head_style))
    table_data = [
        ["Parameter", "Specification Value", "Functional Mechanism"],
        ["Plasma Core Temperature", "5,000 °C – 15,000 °C", "Non-transferred DC plasma torch with tungsten cathode"],
        ["Molten Bath Operating Temp", "1,450 °C – 1,600 °C", "Molten copper collector phase for precious metal dissolution"],
        ["Gas Retention Time", "> 2.0 seconds", "Thermal cracking preventing aromatic halogenated hydrocarbons"],
        ["Precious Metal Yield", "> 95.4% (Au, Ag, Pd, Pt)", "Gravitational separation and multi-stage tapping"],
        ["Slag Vitrification State", "Zero-Leach Silicate", "Compliant with US EPA TCLP toxicity limits"]
    ]
    t = Table(table_data, colWidths=[140, 150, 210])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#20202B')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,0), 8.5),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E6E0D7')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F7F3EA')]),
        ('FONTSIZE', (0,1), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('TOPPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t)
    doc.build(story)
    print("Generated:", pdf_path)

# --------------------------------------------------------------------------
# 6. Generate ese-05-epr-review.docx
# --------------------------------------------------------------------------
def generate_epr_review():
    import docx
    from docx.shared import Pt, RGBColor

    doc_path = os.path.join("files", "ese-05-epr-review.docx")
    doc = docx.Document()

    p = doc.add_paragraph()
    r1 = p.add_run("REGULATORY COMPLIANCE AUDIT // E-WASTE (MANAGEMENT) RULES, 2022\n")
    r1.font.bold = True
    r1.font.color.rgb = RGBColor(120, 86, 255)
    r2 = p.add_run("Extended Producer Responsibility (EPR) Review of Five Leading Indian Electronics Manufacturers")
    r2.font.bold = True
    r2.font.size = Pt(18)
    r2.font.color.rgb = RGBColor(32, 32, 43)

    doc.add_heading("1. Regulatory Framework & CPCB Portal Mandates", level=1)
    doc.add_paragraph(
        "Under the Ministry of Environment, Forest and Climate Change (MoEFCC) E-Waste (Management) Rules, 2022, "
        "producers, manufacturers, refurbishers, and recyclers must register on the centralized CPCB online portal. "
        "EPR obligations mandate progressive recycling targets starting at 60% of sales volume (adjusted by product life cycle) "
        "in 2023–24, escalating to 70% in 2024–25, and 80% by 2026–27."
    )

    doc.add_heading("2. Five Company Compliance & BRSR Disclosures", level=1)
    companies = [
        ("Dixon Technologies", "Target: 8,400 MT | Certified Recyclers: 14 PROs | BRSR Disclosure: Full Compliance | Recycling Yield: 88.5%"),
        ("Kaynes Technology", "Target: 2,150 MT | High-Reliability PCBA streams | Tier-2 certified refiner contracts | BRSR Disclosure: Section 6 Compliant"),
        ("Syrma SGS Technology", "Target: 3,200 MT | Focus on automotive electronics recovery | Green manufacturing index: 78/100"),
        ("Foxconn India (Hon Hai)", "Target: 18,500 MT | Closed-loop copper scrap recycling on-site | Global Zero Waste to Landfill (UL2799 Platinum)"),
        ("Tata Electronics", "Target: 6,700 MT | Precision machining swarf & PCB recycling | Dedicated green supplier audits")
    ]
    for c, desc in companies:
        p = doc.add_paragraph()
        r = p.add_run(f"• {c}: ")
        r.bold = True
        p.add_run(desc)

    doc.save(doc_path)
    print("Generated:", doc_path)

# --------------------------------------------------------------------------
# 7. Generate ese-06-india-policy.pptx
# --------------------------------------------------------------------------
def generate_india_policy():
    from pptx import Presentation
    from pptx.util import Inches, Pt
    from pptx.dml.color import RGBColor

    pptx_path = os.path.join("files", "ese-06-india-policy.pptx")
    prs = Presentation()
    prs.slide_width = Inches(13.33)
    prs.slide_height = Inches(7.5)

    # Slide 1: Title
    slide_layout = prs.slide_layouts[6] # blank
    slide = prs.slides.add_slide(slide_layout)
    
    txBox = slide.shapes.add_textbox(Inches(1), Inches(2), Inches(11.33), Inches(3.5))
    tf = txBox.text_frame
    p1 = tf.paragraphs[0]
    p1.text = "INDIA ENVIRONMENTAL POLICY & DECARBONIZATION BRIEFING"
    p1.font.bold = True
    p1.font.size = Pt(28)
    p1.font.color.rgb = RGBColor(32, 32, 43)

    p2 = tf.add_paragraph()
    p2.text = "A Five-Country Comparative Benchmark: India, USA, Australia, Japan & Russia"
    p2.font.bold = True
    p2.font.size = Pt(18)
    p2.font.color.rgb = RGBColor(120, 86, 255)

    p3 = tf.add_paragraph()
    p3.text = "Course: VEC02 EWEM · Academic Year 2026–27 · 6-Slide Executive Briefing"
    p3.font.size = Pt(12)
    p3.font.color.rgb = RGBColor(119, 118, 129)

    # Slide 2: Target Comparison
    slide2 = prs.slides.add_slide(slide_layout)
    txBox2 = slide2.shapes.add_textbox(Inches(1), Inches(1), Inches(11.33), Inches(5.5))
    tf2 = txBox2.text_frame
    p_h = tf2.paragraphs[0]
    p_h.text = "Core Environmental Statutes & 2030 Decarbonization Mandates"
    p_h.font.bold = True
    p_h.font.size = Pt(22)
    p_h.font.color.rgb = RGBColor(32, 32, 43)

    bullets = [
        "India: 45% reduction in GDP emissions intensity by 2030 from 2005 levels; ~50% cumulative electric power installed capacity from non-fossil sources.",
        "E-Waste Integration: MoEFCC 2022 rules establish tradeable EPR credit certificates on a central CPCB registry.",
        "United States: Resource Conservation and Recovery Act (RCRA); state-level legislation (California SB 20, 25+ states with manufacturer mandates).",
        "Japan: Home Appliance Recycling Law (HARL) & Law for the Promotion of Effective Utilization of Resources (LPEUR).",
        "Australia: National Television and Computer Recycling Scheme (NTCRS) achieving 90% industry-funded recycling targets."
    ]
    for b in bullets:
        p = tf2.add_paragraph()
        p.text = f"• {b}"
        p.font.size = Pt(14)
        p.font.color.rgb = RGBColor(50, 50, 60)

    prs.save(pptx_path)
    print("Generated:", pptx_path)

# --------------------------------------------------------------------------
# 8. Generate ese-08-green-building.xlsx
# --------------------------------------------------------------------------
def generate_green_building():
    import openpyxl
    from openpyxl.styles import Font, PatternFill, Alignment

    wb_path = os.path.join("files", "ese-08-green-building.xlsx")
    wb = openpyxl.Workbook()

    ws = wb.active
    ws.title = "LEED Scorecard"

    ws["A1"] = "NATIONAL GREEN BUILDING SCORECARD // 10 CERTIFIED FACILITIES"
    ws["A1"].font = Font(name="Arial", size=13, bold=True, color="7856FF")

    headers = ["Building Name", "Location", "Rating / Certification", "Energy (15)", "Water (10)", "Waste (10)", "Indoor Env (10)", "Innovation (15)", "Total (60)"]
    ws.append([])
    ws.append(headers)

    header_fill = PatternFill(start_color="20202B", end_color="20202B", fill_type="solid")
    header_font = Font(name="Arial", size=9.5, bold=True, color="FFFFFF")
    for col in range(1, 10):
        cell = ws.cell(row=3, column=col)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center")

    buildings = [
        ("Suzlon One Earth", "Pune", "LEED Platinum", 14, 9, 10, 9, 14, "=SUM(D4:H4)"),
        ("ITC Maurya", "New Delhi", "LEED Platinum", 13, 10, 9, 9, 13, "=SUM(D5:H5)"),
        ("Infosys Pocharam", "Hyderabad", "LEED Platinum", 15, 9, 10, 10, 14, "=SUM(D6:H6)"),
        ("CII-Sohrabji Godrej GBC", "Hyderabad", "LEED Platinum", 14, 10, 10, 9, 14, "=SUM(D7:H7)"),
        ("Olympia Tech Park", "Chennai", "LEED Gold", 12, 8, 8, 8, 12, "=SUM(D8:H8)"),
        ("BCIL T-Zed", "Bengaluru", "IGBC Platinum", 13, 9, 9, 9, 13, "=SUM(D9:H9)"),
        ("Patni Knowledge Park", "Airoli, Navi Mumbai", "LEED Platinum", 14, 8, 9, 9, 13, "=SUM(D10:H10)"),
        ("Infinity Benchmark", "Kolkata", "LEED Platinum", 13, 8, 8, 9, 12, "=SUM(D11:H11)"),
        ("Wipro Technologies Campus", "Bengaluru", "LEED Certified", 11, 7, 8, 8, 11, "=SUM(D12:H12)"),
        ("Godrej Bhavan", "Mumbai", "LEED Gold", 12, 8, 8, 8, 12, "=SUM(D13:H13)")
    ]
    for b in buildings:
        ws.append(b)

    wb.save(wb_path)
    print("Generated:", wb_path)

# --------------------------------------------------------------------------
# 9. Generate ese-09-swach-case-study.docx
# --------------------------------------------------------------------------
def generate_swach_case_study():
    import docx
    from docx.shared import Pt, RGBColor

    doc_path = os.path.join("files", "ese-09-swach-case-study.docx")
    doc = docx.Document()

    p = doc.add_paragraph()
    r1 = p.add_run("GRASSROOTS CIRCULAR ECONOMY CASE STUDY\n")
    r1.font.bold = True
    r1.font.color.rgb = RGBColor(120, 86, 255)
    r2 = p.add_run("Pune's SWaCH Cooperative Model: Integrating Informal Waste Pickers into Municipal Solid & E-Waste Systems")
    r2.font.bold = True
    r2.font.size = Pt(18)
    r2.font.color.rgb = RGBColor(32, 32, 43)

    doc.add_heading("1. Executive Overview", level=1)
    doc.add_paragraph(
        "SWaCH (Solid Waste Collection and Handling) is India's first wholly-owned cooperative of self-employed waste pickers, "
        "established in Pune, Maharashtra. Representing over 3,800 informal recyclers (over 70% women from marginalized communities), "
        "the cooperative provides daily door-to-door source-segregated waste collection to approximately 900,000 urban households "
        "across the Pune Municipal Corporation (PMC) jurisdiction."
    )

    doc.add_heading("2. E-Waste Segregation & Formal Integration", level=1)
    doc.add_paragraph(
        "Historically, e-waste in India was dismantled through informal open-pit acid leaching and torch burning. Under SWaCH's "
        "'V-Collect' e-waste campaign, waste pickers receive formal training to identify hazardous electronic scrap (CRTs, Li-ion batteries, "
        "PCBs) at source, diverting over 280 Metric Tonnes of post-consumer electronics annually directly to authorized CPCB-certified dismantlers."
    )

    doc.add_heading("3. Socio-Economic Outcomes", level=1)
    doc.add_paragraph(
        "• Municipal Cost Savings: PMC saves an estimated ₹22 Crores annually in waste transportation and tipping fees.\n"
        "• Worker Dignity & Health: Elimination of open toxic burning; comprehensive medical insurance and protective gear.\n"
        "• High Resource Efficiency: Over 85% of dry waste diverted from landfills into circular supply chains."
    )

    doc.save(doc_path)
    print("Generated:", doc_path)

# --------------------------------------------------------------------------
# 10. Generate ese-10-cartify-paper.pdf
# --------------------------------------------------------------------------
def generate_cartify_paper():
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib import colors

    pdf_path = os.path.join("files", "ese-10-cartify-paper.pdf")
    doc = SimpleDocTemplate(pdf_path, pagesize=letter, rightMargin=45, leftMargin=45, topMargin=45, bottomMargin=45)
    styles = getSampleStyleSheet()

    title_style = ParagraphStyle('IEEE_Title', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=16, leading=20, alignment=1, textColor=colors.HexColor('#20202B'))
    author_style = ParagraphStyle('IEEE_Author', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=12, alignment=1, textColor=colors.HexColor('#505060'))
    head_style = ParagraphStyle('IEEE_Head', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.HexColor('#20202B'))
    body_style = ParagraphStyle('IEEE_Body', parent=styles['Normal'], fontName='Helvetica', fontSize=8.5, leading=11.5, textColor=colors.HexColor('#20202B'))

    story = []
    story.append(Paragraph("Cartify: A Scalable Quality-Gated Catalogue Pipeline and Attention-Based Recommendation Engine for Verified Electronic Listings", title_style))
    story.append(Spacer(1, 6))
    story.append(Paragraph("Dhiraj Pawar, Kalpesh Sawkare, Sainath Nanaware, Preet Panaviya<br/>Department of Computer Engineering, Vidyalankar Institute of Technology, Mumbai", author_style))
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#20202B'), spaceAfter=8))

    story.append(Paragraph("<b>Abstract—Electronic waste mitigation relies heavily on circular commerce and certified secondary product remarketing. In this paper, we propose Cartify, an end-to-end catalogue engineering architecture featuring a quality-gated verification pipeline that filters 572,083 raw product entries down to 17,931 verified electronics listings. The pipeline feeds a star-schema analytical warehouse paired with a four-model attention fusion recommender. Empirical benchmarks show Cartify achieves a Hit Ratio@10 of 0.327 compared to 0.260 for standard Neural Collaborative Filtering (NCF), providing a 25.7% accuracy improvement.</b>", body_style))
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>I. INTRODUCTION</b>", head_style))
    story.append(Paragraph(
        "Circular electronics remarketing faces severe friction due to metadata degradation, duplicated product listings, and mismatched buyer intent. "
        "Standard collaborative filtering architectures degrade significantly when processing sparse secondhand inventories. "
        "Cartify resolves this with a dual-stage architecture: rigorous data deduplication and attention-weighted neural fusion.",
        body_style
    ))
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>II. EXPERIMENTAL RESULTS</b>", head_style))
    results = [
        ["Model Architecture", "Hit Ratio@5", "Hit Ratio@10", "NDCG@10", "Latency (ms)"],
        ["ItemKNN Baseline", "0.142", "0.215", "0.118", "4.2 ms"],
        ["Matrix Factorization (BPR)", "0.165", "0.238", "0.134", "8.1 ms"],
        ["Neural Collab Filtering (NCF)", "0.188", "0.260", "0.152", "16.4 ms"],
        ["Cartify Attention Fusion (Ours)", "0.245", "0.327", "0.198", "12.8 ms"]
    ]
    t = Table(results, colWidths=[160, 85, 85, 85, 85])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#20202B')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,0), 8),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E6E0D7')),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F7F3EA')]),
        ('FONTSIZE', (0,1), (-1,-1), 7.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    doc.build(story)
    print("Generated:", pdf_path)

if __name__ == "__main__":
    generate_course_insights()
    generate_mp_report()
    generate_mp_tracker()
    generate_kerala_deck()
    generate_plasma_arc_patent()
    generate_epr_review()
    generate_india_policy()
    generate_green_building()
    generate_swach_case_study()
    generate_cartify_paper()
    print("All documents generated successfully!")
