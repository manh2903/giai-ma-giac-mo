// Hàm chuyển đổi chuỗi thành số
function stringToNumber(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}

// Hàm rút gọn số thành 2 chữ số
function reduceToTwoDigits(num) {
    while (num > 99) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
}

// Hàm thêm hiệu ứng loading
function showLoading() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Đang giải mã giấc mơ của bạn...</p>
        </div>
    `;
}

// Hàm giải mã ước mơ
function decodeDream() {
    const dreamInput = document.getElementById('dreamInput');
    const resultDiv = document.getElementById('result');
    
    if (!dreamInput.value.trim()) {
        resultDiv.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-circle"></i>
                <p>Vui lòng nhập điều bạn mơ thấy!</p>
            </div>
        `;
        return;
    }

    // Hiển thị loading
    showLoading();

    // Giả lập thời gian xử lý để tạo cảm giác thực tế
    setTimeout(() => {
        const dreamText = dreamInput.value.toLowerCase();
        const number = stringToNumber(dreamText);
        const result = reduceToTwoDigits(number);
        
        // Thêm hiệu ứng typing
        resultDiv.innerHTML = `
            <div class="dream-details">
                <p><i class="fas fa-dream"></i> Điều bạn mơ thấy: <strong>${dreamInput.value}</strong></p>
                <p><i class="fas fa-hashtag"></i> Con số giải mã: <strong>${result}</strong></p>
                <p class="interpretation"><i class="fas fa-lightbulb"></i> Gợi ý: Con số ${result} có thể mang đến may mắn cho bạn trong thời gian tới!</p>
            </div>
        `;
        
        // Thêm hiệu ứng animation
        resultDiv.style.animation = 'none';
        resultDiv.offsetHeight; // Trigger reflow
        resultDiv.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 1500);
}

// Thêm sự kiện nhấn Enter
document.getElementById('dreamInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        decodeDream();
    }
});

// Thêm hiệu ứng focus cho input
document.getElementById('dreamInput').addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
});

document.getElementById('dreamInput').addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
}); 