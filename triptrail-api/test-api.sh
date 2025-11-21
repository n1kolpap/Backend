#!/bin/bash

# TripTrail API Test Script
# This script tests all available API endpoints
#
# NOTE: This script uses hard-coded test credentials for demonstration purposes.
# In a production environment, use environment variables or a secure configuration file.

BASE_URL="http://localhost:5000"

echo "================================================"
echo "TripTrail API Test Script"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Function to test endpoint
test_endpoint() {
    local method=$1
    local endpoint=$2
    local data=$3
    local description=$4
    
    echo -e "${BLUE}Testing: $description${NC}"
    echo "  Method: $method"
    echo "  Endpoint: $endpoint"
    
    if [ -z "$data" ]; then
        response=$(curl -s -X $method "$BASE_URL$endpoint")
    else
        response=$(curl -s -X $method "$BASE_URL$endpoint" -H "Content-Type: application/json" -d "$data")
    fi
    
    success=$(echo $response | jq -r '.success // false')
    
    if [ "$success" = "true" ]; then
        echo -e "  ${GREEN}✓ PASSED${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "  ${RED}✗ FAILED${NC}"
        echo "  Response: $response"
        ((TESTS_FAILED++))
    fi
    echo ""
}

echo "Starting API tests..."
echo ""

# 1. Health Check
test_endpoint "GET" "/health" "" "Health Check"

# 2. Create User
test_endpoint "POST" "/user" '{"username":"testuser","email":"testuser@example.com","password":"testpass123"}' "Create User"

# 3. User Login
test_endpoint "PUT" "/user/login" '{"email":"john@example.com","password":"password123"}' "User Login"

# 4. Create Trip Plan
test_endpoint "POST" "/user/1/tripPlan" '{"origin":"San Francisco","destination":"Seattle","startDate":"2024-09-01","endDate":"2024-09-07","budget":1800}' "Create Trip Plan"

# 5. Get Trip Plan
test_endpoint "GET" "/user/1/tripPlan/1" "" "Get Trip Plan"

# 6. Update Trip Plan
test_endpoint "PUT" "/user/1/tripPlan/1" '{"budget":3000}' "Update Trip Plan"

# 7. Get Daily Plans
test_endpoint "GET" "/user/1/tripPlan/1/dailyPlan" "" "Get Daily Plans"

# 8. Create Daily Plan
test_endpoint "POST" "/user/1/tripPlan/1/dailyPlan" '{"date":"2024-06-06","activities":[]}' "Create Daily Plan"

# 9. Update Daily Plan
test_endpoint "PUT" "/user/1/tripPlan/1/dailyPlan/2024-06-06" '{"activities":[{"activityId":"act-test","name":"Sightseeing","location":"City Center","day":"2024-06-06","time":"10:00"}]}' "Update Daily Plan"

# 10. Add Activity to Daily Plan
test_endpoint "POST" "/user/1/tripPlan/1/dailyPlan/2024-06-02/activity" '{"name":"Evening Walk","location":"Beach","day":"2024-06-02","time":"18:00"}' "Add Activity"

# 11. Delete Daily Plan
test_endpoint "DELETE" "/user/1/tripPlan/1/dailyPlan/2024-06-06" "" "Delete Daily Plan"

# 12. Delete Trip Plan
test_endpoint "DELETE" "/user/1/tripPlan/1" "" "Delete Trip Plan"

echo "================================================"
echo "Test Results:"
echo "  Total Passed: ${TESTS_PASSED}"
echo "  Total Failed: ${TESTS_FAILED}"
echo "================================================"

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}Some tests failed!${NC}"
    exit 1
fi
