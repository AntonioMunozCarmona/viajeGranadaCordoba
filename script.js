// Estado de la aplicación
let selectedDay = 0
let checkedItems = {}

// Datos del itinerario
const itinerary = [
  {
    date: '4 Oct 2025',
    title: 'Madrid → Granada',
    location: 'Viaje y llegada',
    icon: 'car',
    activities: [
      {
        time: '09:00',
        activity: 'Salida desde Madrid',
        type: 'transport',
        duration: '4h 30min',
      },
      {
        time: '14:00',
        activity: 'Llegada a Granada y check-in hotel',
        type: 'hotel',
      },
      {
        time: '16:00',
        activity: 'Paseo por el Centro Histórico',
        type: 'sightseeing',
      },
      {
        time: '18:00',
        activity: 'Catedral de Granada y Capilla Real',
        type: 'monument',
      },
      {
        time: '20:30',
        activity: 'Cena en el Barrio del Realejo',
        type: 'dining',
      },
    ],
  },
  {
    date: '5 Oct 2025',
    title: 'Granada - Alhambra',
    location: 'Día principal en Granada',
    icon: 'star',
    activities: [
      { time: '08:30', activity: 'Desayuno en el hotel', type: 'dining' },
      {
        time: '09:30',
        activity: 'Visita a La Alhambra (día completo)',
        type: 'monument',
        highlight: true,
      },
      {
        time: '13:00',
        activity: 'Almuerzo en los jardines del Generalife',
        type: 'dining',
      },
      { time: '15:00', activity: 'Palacio de Carlos V', type: 'monument' },
      {
        time: '17:00',
        activity: 'Mirador de San Nicolás (Albaicín)',
        type: 'viewpoint',
      },
      { time: '20:00', activity: 'Tapas en el Albaicín', type: 'dining' },
    ],
  },
  {
    date: '6 Oct 2025',
    title: 'Granada - Sacromonte',
    location: 'Barrios tradicionales',
    icon: 'camera',
    activities: [
      {
        time: '10:00',
        activity: 'Paseo por el Sacromonte',
        type: 'sightseeing',
      },
      {
        time: '11:30',
        activity: 'Museo Cuevas del Sacromonte',
        type: 'museum',
      },
      { time: '13:00', activity: 'Almuerzo en el Albaicín', type: 'dining' },
      {
        time: '15:30',
        activity: 'Monasterio de San Jerónimo',
        type: 'monument',
      },
      {
        time: '17:00',
        activity: 'Parque de las Ciencias (opcional)',
        type: 'museum',
      },
      {
        time: '21:00',
        activity: 'Espectáculo flamenco en cueva',
        type: 'show',
        highlight: true,
      },
    ],
  },
  {
    date: '7 Oct 2025',
    title: 'Ruta de los Pueblos',
    location: 'Granada → Alcalá la Real → Priego → Montilla → Córdoba',
    icon: 'car',
    activities: [
      {
        time: '09:00',
        activity: 'Check-out y salida hacia Alcalá la Real',
        type: 'transport',
        duration: '1h 15min',
      },
      {
        time: '10:30',
        activity: 'Alcalá la Real: Fortaleza de la Mota',
        type: 'monument',
        highlight: true,
      },
      { time: '12:00', activity: 'Café en Alcalá la Real', type: 'dining' },
      {
        time: '12:45',
        activity: 'Salida hacia Priego de Córdoba',
        type: 'transport',
        duration: '45min',
      },
      {
        time: '13:45',
        activity: 'Priego: Barrio de la Villa y Balcón del Adarve',
        type: 'sightseeing',
        highlight: true,
      },
      {
        time: '15:00',
        activity: 'Almuerzo en Priego (pueblo más bonito)',
        type: 'dining',
      },
      {
        time: '16:30',
        activity: 'Salida hacia Montilla',
        type: 'transport',
        duration: '40min',
      },
      {
        time: '17:15',
        activity: 'Montilla: cata de vinos Montilla-Moriles',
        type: 'tasting',
        highlight: true,
      },
      {
        time: '18:45',
        activity: 'Llegada a Córdoba y check-in',
        type: 'transport',
        duration: '45min',
      },
      { time: '21:00', activity: 'Cena ligera en Córdoba', type: 'dining' },
    ],
  },
  {
    date: '8 Oct 2025',
    title: 'Córdoba - Mezquita',
    location: 'Centro histórico',
    icon: 'star',
    activities: [
      { time: '09:00', activity: 'Desayuno tranquilo', type: 'dining' },
      {
        time: '10:00',
        activity: 'Visita completa a la Mezquita-Catedral',
        type: 'monument',
        highlight: true,
      },
      { time: '12:30', activity: 'Paseo por la Judería', type: 'sightseeing' },
      { time: '13:30', activity: 'Almuerzo en patio cordobés', type: 'dining' },
      { time: '15:30', activity: 'Sinagoga de Córdoba', type: 'monument' },
      { time: '16:30', activity: 'Calleja de las Flores', type: 'sightseeing' },
      {
        time: '17:30',
        activity: 'Puente Romano y Torre de la Calahorra',
        type: 'monument',
      },
      {
        time: '19:00',
        activity: 'Atardecer desde el puente',
        type: 'viewpoint',
      },
      { time: '21:00', activity: 'Cena tradicional cordobesa', type: 'dining' },
    ],
  },
  {
    date: '9 Oct 2025',
    title: 'Córdoba - Alcázar y Viana',
    location: 'Palacios y jardines',
    icon: 'map-pin',
    activities: [
      {
        time: '09:30',
        activity: 'Alcázar de los Reyes Cristianos',
        type: 'monument',
        highlight: true,
      },
      { time: '11:30', activity: 'Jardines del Alcázar', type: 'garden' },
      { time: '13:00', activity: 'Almuerzo en el centro', type: 'dining' },
      {
        time: '15:00',
        activity: 'Palacio de Viana y sus 12 patios',
        type: 'monument',
        highlight: true,
      },
      { time: '17:30', activity: 'Templo Romano', type: 'monument' },
      {
        time: '18:30',
        activity: 'Compras en el centro histórico',
        type: 'shopping',
      },
      {
        time: '20:00',
        activity: 'Aperitivo en azotea con vistas',
        type: 'dining',
      },
    ],
  },
  {
    date: '10 Oct 2025',
    title: 'Excursión Medina Azahara',
    location: 'Ciudad califal',
    icon: 'star',
    activities: [
      {
        time: '09:00',
        activity: 'Salida a Medina Azahara',
        type: 'transport',
        duration: '20min',
      },
      {
        time: '10:00',
        activity: 'Visita guiada Medina Azahara',
        type: 'monument',
        highlight: true,
      },
      { time: '13:00', activity: 'Regreso a Córdoba', type: 'transport' },
      { time: '14:30', activity: 'Almuerzo en el centro', type: 'dining' },
      { time: '16:30', activity: 'Museo Arqueológico', type: 'museum' },
      { time: '18:00', activity: 'Baños Árabes Califales', type: 'wellness' },
      {
        time: '20:30',
        activity: 'Cena de despedida',
        type: 'dining',
        highlight: true,
      },
    ],
  },
  {
    date: '11 Oct 2025',
    title: 'Córdoba → Madrid',
    location: 'Regreso a casa',
    icon: 'car',
    activities: [
      { time: '10:00', activity: 'Check-out y último paseo', type: 'hotel' },
      {
        time: '11:30',
        activity: 'Salida hacia Madrid',
        type: 'transport',
        duration: '4h',
      },
      { time: '16:00', activity: 'Llegada a Madrid', type: 'transport' },
    ],
  },
]

// Función para obtener el icono de una actividad
function getActivityIcon(type) {
  const iconMap = {
    monument: 'map-pin',
    dining: 'utensils',
    transport: 'car',
    sightseeing: 'camera',
    museum: 'star',
    tasting: 'coffee',
    viewpoint: 'camera',
    garden: 'star',
    wellness: 'coffee',
    show: 'star',
    shopping: 'map-pin',
    hotel: 'map-pin',
  }
  return iconMap[type] || 'clock'
}

// Función para obtener la clase CSS del icono
function getActivityIconClass(type) {
  const classMap = {
    monument: 'icon-monument',
    dining: 'icon-dining',
    transport: 'icon-transport',
    sightseeing: 'icon-sightseeing',
    museum: 'icon-museum',
    tasting: 'icon-tasting',
    viewpoint: 'icon-viewpoint',
    garden: 'icon-garden',
    wellness: 'icon-wellness',
    show: 'icon-show',
    shopping: 'icon-shopping',
    hotel: 'icon-hotel',
  }
  return classMap[type] || 'icon-default'
}

// Función para cambiar de día
function setSelectedDay(dayIndex) {
  selectedDay = dayIndex
  renderDayNavigation()
  renderDayDetail()
}

// Función para toggle checkbox
function toggleCheck(dayIndex, itemIndex) {
  const key = `${dayIndex}-${itemIndex}`
  checkedItems[key] = !checkedItems[key]
  renderDayDetail()
}

// Función para renderizar la navegación de días
function renderDayNavigation() {
  const navigation = document.getElementById('dayNavigation')
  navigation.innerHTML = ''

  itinerary.forEach((day, index) => {
    const button = document.createElement('button')
    button.className = `day-btn ${selectedDay === index ? 'active' : ''}`
    button.onclick = () => setSelectedDay(index)

    button.innerHTML = `
            <div class="day-btn-date">${day.date}</div>
            <div class="day-btn-title">${day.title.split(' ')[0]}</div>
        `

    navigation.appendChild(button)
  })
}

// Función para renderizar el detalle del día
function renderDayDetail() {
  const currentDay = itinerary[selectedDay]

  // Renderizar header
  const header = document.getElementById('dayHeader')
  header.innerHTML = `
        <i data-lucide="${currentDay.icon}" class="day-icon"></i>
        <div>
            <h2 class="day-title">${currentDay.title}</h2>
            <p class="day-info">${currentDay.date} • ${currentDay.location}</p>
        </div>
    `

  // Renderizar actividades
  const activitiesContainer = document.getElementById('activities')
  activitiesContainer.innerHTML = ''

  currentDay.activities.forEach((activity, index) => {
    const isChecked = checkedItems[`${selectedDay}-${index}`] || false

    const activityDiv = document.createElement('div')
    activityDiv.className = `activity ${
      activity.highlight ? 'highlight' : ''
    } ${isChecked ? 'checked' : ''}`
    activityDiv.onclick = () => toggleCheck(selectedDay, index)

    const iconClass = getActivityIconClass(activity.type)
    const iconName = getActivityIcon(activity.type)

    activityDiv.innerHTML = `
            <input type="checkbox" class="activity-checkbox" ${
              isChecked ? 'checked' : ''
            } 
                   onchange="toggleCheck(${selectedDay}, ${index})">
            <div class="activity-content">
                <div class="activity-header">
                    <span class="activity-time">${activity.time}</span>
                    <i data-lucide="${iconName}" class="activity-icon ${iconClass}"></i>
                    <span class="activity-text">${activity.activity}</span>
                    ${
                      activity.duration
                        ? `<span class="activity-duration">${activity.duration}</span>`
                        : ''
                    }
                </div>
                ${
                  activity.highlight
                    ? '<div class="activity-highlight-note">⭐ Imprescindible - Reserva con antelación</div>'
                    : ''
                }
            </div>
        `

    activitiesContainer.appendChild(activityDiv)
  })

  // Reinicializar los iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons()
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
  renderDayNavigation()
  renderDayDetail()

  // Inicializar iconos de Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons()
  }
})

// Hacer funciones globales para los event handlers inline
window.setSelectedDay = setSelectedDay
window.toggleCheck = toggleCheck
